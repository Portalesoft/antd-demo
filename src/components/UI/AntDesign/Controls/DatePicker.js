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
    formItem,
    meta
}) => (
    <DatePicker 
        {...input}        
        style={style} 
        value={input.value !== '' ? moment(input.value) : null}
        format="MMM DD YYYY"
        placeholder={placeholder} />
);

datePicker.defaultProps = {};
datePicker.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.string
}

export default withFormItem(datePicker);