
// Error messages prefixed with $ will be displayed literally otherwise use a field name prefix
export const formatMessage = (label, name, message) => {
    if (message) {
        return message.charAt(0) === "$" ? message.substr(1) : `${label ? label : name} ${message}`; 
    }
    return null;
}

// Construct the validation status and message relevant for our control
export const checkFieldStatus = (name, label, touched, error, warning) => {
    let validateStatus = touched ? "success" : null;
    let help = null;
    if (touched) {
        if (error) {
            validateStatus = "error";
            help = formatMessage(label, name, error);
        } else if (warning) {
            validateStatus = "warning";
            help = formatMessage(label, name, warning);                
        } 
    }
    return { validateStatus: validateStatus, help: help };
}