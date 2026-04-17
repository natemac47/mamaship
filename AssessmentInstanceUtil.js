var AssessmentInstanceUtil = Class.create();
AssessmentInstanceUtil.prototype = Object.extendsObject(AssessmentInstanceUtilSNC, {

    _canCancelAssessment: function(asmtInstGR) {
        return false;
    },

    cancelAssessment: function(assessmentId) {
        return {
            isCancellationSuccesful: false,
        };
    },

    type: 'AssessmentInstanceUtil'
});
