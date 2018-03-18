import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';

import './Styles/Controls.css';

const checkbox = ({
    input,
    style,
    label,
    content,
    className,
    labelCol,
    wrapperCol,
    meta: { touched, error, warning }
}) => {

    return (
        <Form.Item
            className={className}
            label={label}
            labelCol={labelCol}
            wrapperCol={wrapperCol}>
            <Checkbox
                {...input}                 
                style={style}>
                    {content}
            </Checkbox>
        </Form.Item>
    );

}

checkbox.defaultProps = {
    isFormItem: true
};

checkbox.propTypes = {
    input: PropTypes.object.isRequired,
    isFormItem: PropTypes.bool,    
    style: PropTypes.object,    
    label: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    className: PropTypes.string,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    meta: PropTypes.shape({ 
        touched: PropTypes.bool.isRequired, 
        error: PropTypes.string, 
        warning: PropTypes.string})
}

export default checkbox;