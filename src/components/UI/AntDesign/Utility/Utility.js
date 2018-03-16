
// Error messages prefixed with $ will be displayed literally otherwise use a field name prefix
export const formatMessage = (caption, label, name, message) => {
    if (message) {
        return message.charAt(0) === "$" ? message.substr(1) : `${caption ? caption: label ? label : name} ${message}`; 
    }
    return null;
}