import React from 'react';
import moment from 'moment';
import { TimePicker } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const timePicker = ({
    input,
    formItem,
    format,
    ...custom
}) => {

    return (
        <TimePicker 
            {...input}        
            {...custom}
            format={format}   
            value={input.value !== '' ? moment(input.value, format) : null} />
    );
}

timePicker.defaultProps = {
    placeholder: null,
    format: 'HH:mm'
};

export default withFormItem(timePicker);