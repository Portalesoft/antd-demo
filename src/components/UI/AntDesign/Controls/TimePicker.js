import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TimePicker } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const timePicker = ({
    input,
    style,
    placeholder,
    formItem,
    meta
}) => {

    const format = 'HH:mm';
    return (
        <TimePicker 
            {...input}        
            style={style} 
            value={input.value !== '' ? moment(input.value, format) : null}
            format={format}
            placeholder={placeholder} />
    );
}


timePicker.defaultProps = {
    placeholder: null
};

timePicker.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    showTime: PropTypes.bool
};

export default withFormItem(timePicker);