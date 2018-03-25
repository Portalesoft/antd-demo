import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const datePicker = ({
    input,
    formItem,
    ...custom
}) => {
    
    const format = custom.showTime ? 'MMM DD YYYY HH:mm' : 'MMM DD YYYY'
    return (
        <DatePicker 
            {...input}    
            {...custom} 
            format={format}   
            value={input.value !== '' ? moment(input.value, format) : null} />
    );

};
    
    
datePicker.defaultProps = {
    placeholder: null
};
    
export default withFormItem(datePicker);

