export const toDecimal = (precision) =>
    (e) => {
        e.target.value = e.target.value.replace(/-$/, '');
        if (e.target.value) {
            if (precision === -1) {
                e.target.value = e.target.value.replace(/\.$/, '');
            } else {
                if (!isNaN(e.target.value)) {            
                    e.target.value = Number(e.target.value).toFixed(precision);            
                }
            }
        }
    }