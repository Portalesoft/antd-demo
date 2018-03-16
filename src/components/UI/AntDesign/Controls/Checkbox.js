import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';

import './Styles/Controls.css';

const checkbox = ({
    input,
    style,
    label,
    className,
    wrapperCol,
    meta: { touched, error, warning }
}) => {

    return (
        <Form.Item
            className={className}
            wrapperCol={wrapperCol}>
            <Checkbox
                {...input}                 
                style={style}>
                    {label}
            </Checkbox>
        </Form.Item>
    );

}

checkbox.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.object,
    className: PropTypes.string,
    wrapperCol: PropTypes.object,
    meta: PropTypes.shape({ 
        touched: PropTypes.bool.isRequired, 
        error: PropTypes.string, 
        warning: PropTypes.string})
}

export default checkbox;