function onSubmit() {
    g_form.clearMessages();

    var msg = 'Please attach at least one file before submitting.';

    if (typeof window === 'undefined' || window === null) {
        var spCount = this.document.getElementsByClassName('get-attachment').length;
        if (spCount < 1) {
            g_form.addErrorMessage(msg);
            return false;
        }
        return true;
    }

    var label = document.getElementById('header_attachment_list_label');
    if (!label || label.style.visibility == 'hidden' || label.style.display == 'none') {
        g_form.addErrorMessage(msg);
        return false;
    }
    return true;
}
