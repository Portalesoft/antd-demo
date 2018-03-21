export const toUpperCase = value => value && value.toUpperCase();
export const toLowerCase = value => value && value.toLowerCase();
export const toAlphanumeric = value => value && value.replace(/[^\da-z]/gi, '');
export const toAlphabetic = value => value && value.replace(/[^a-z]/gi, '');
export const toInteger = value => {
    if (value) {
        value = value.replace(/[^\d-]/g, '');
        value = value.replace(/(-.*)-/g, '$1');
        if (value.indexOf('-') > 0) {
            value = value.replace('-', '');
        }
    }
    return value;
}
export const toDecimal = (precision) =>
    (value, previousValue, allValues) => {
        if (value) {
            value = value.replace(/[^\d.-]/g, '');
            value = value.replace(/(\..*)\./g, '$1');
            value = value.replace(/(-.*)-/g, '$1');
            if (value.indexOf('-') > 0) {
                value = value.replace('-', '');
            }
            const index = value.indexOf('.');
            if (precision >= 0 && index > 0 && value.length - index - 1 > precision) {
                value = value.substr(0, index + precision + 1);
            }
        }
        return value;
    }    
export const lessThan = otherField => (value, previousValue, allValues) => value < allValues[otherField] ? value : previousValue;
export const greaterThan = otherField => (value, previousValue, allValues) => value > allValues[otherField] ? value : previousValue;

