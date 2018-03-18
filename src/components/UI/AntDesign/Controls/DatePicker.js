import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Form, DatePicker } from 'antd';

import './Styles/Controls.css';

const datePicker = ({
    input,
    isFormItem,
    style,
    label,
    className,
    placeholder,
    labelCol,
    wrapperCol,
    meta: { touched, error, warning }
}) => {

    let control =
        <DatePicker 
            {...input}        
            style={style} 
            value={input.value !== '' ? moment(input.value) : null}
            format="MMM DD YYYY"
            placeholder={placeholder} />

    if (isFormItem) {
        control = 
            <Form.Item
                className={className}
                label={label}
                labelCol={labelCol}
                wrapperCol={wrapperCol}>
                    {control}
            </Form.Item>
    }
        
    return control;

}

datePicker.defaultProps = {
    isFormItem: true
};

datePicker.propTypes = {
    input: PropTypes.object.isRequired,
    isFormItem: PropTypes.bool,    
    label: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    meta: PropTypes.shape({ 
        touched: PropTypes.bool.isRequired, 
        error: PropTypes.string, 
        warning: PropTypes.string})
}

export default datePicker;