var logGr = new GlideRecord('sys_gen_ai_log_metadata');
logGr.addEncodedQuery('metadata_table=incident^metadata_documentISNOTEMPTY');
logGr.query();

var totalMetadataRecords = 0;
var seenIncidentIds = {};
var distinctIncidentCount = 0;
var totalReassignmentCount = 0;
var incidentsNotFound = 0;

while (logGr.next()) {
    totalMetadataRecords++;

    var incSysId = logGr.getValue('metadata_document');
    if (!incSysId)
        continue;

    if (seenIncidentIds[incSysId])
        continue;

    var incGr = new GlideRecord('incident');
    if (!incGr.get(incSysId)) {
        incidentsNotFound++;
        continue;
    }

    seenIncidentIds[incSysId] = true;
    distinctIncidentCount++;

    var rc = parseInt(incGr.getValue('reassignment_count'), 10);
    if (isNaN(rc))
        rc = 0;

    totalReassignmentCount += rc;
}

gs.print('Total metadata records matched: ' + totalMetadataRecords);
gs.print('Distinct incidents referenced by metadata_document: ' + distinctIncidentCount);
gs.print('Distinct incident sys_ids not found: ' + incidentsNotFound);
gs.print('Total reassignment_count across distinct incidents: ' + totalReassignmentCount);
