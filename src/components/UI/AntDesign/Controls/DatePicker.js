import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const datePicker = ({
    input,
    style,
    placeholder,
    showTime,
    formItem,
    meta
}) => {

    const format = showTime ? 'MMM DD YYYY HH:mm' : 'MMM DD YYYY'
    return (
        <DatePicker 
            {...input}        
            style={style} 
            value={input.value !== '' ? moment(input.value, format) : null}
            format={format}
            showTime={showTime}
            placeholder={placeholder} />
    );
};


datePicker.defaultProps = {
    showTime: false,
    placeholder: null
};

datePicker.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    showTime: PropTypes.bool
};

export default withFormItem(datePicker);