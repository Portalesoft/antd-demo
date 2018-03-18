import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Tooltip, Input } from 'antd';
import { checkFieldStatus } from '../Utility/Utility';

import './Styles/Controls.css';

const input = ({
    input,
    type,
    style,
    icon,
    placeholder,
    addonBefore,
    formatOnBlur,
    formItem,
    meta: { touched, error, warning }
}) => {

    const { className, label, tooltip, labelCol, wrapperCol, hasFeedback } = formItem || {};
    const { validateStatus, help } = checkFieldStatus(input.name, label, touched, error, warning) || {};

    let prefix = null;
    if (icon) {
        prefix = <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
    }

    let fieldLabel = label;
    if (tooltip) {
        fieldLabel = (
            <span>
              {label}&nbsp;
              <Tooltip title={tooltip.title}>
                <Icon type={tooltip.icon} />
              </Tooltip>
            </span>
          );
    }

    let control = 
        <Input
            {...input} 
            placeholder={placeholder} 
            type={type} 
            style={style}
            prefix={prefix} 
            addonBefore={addonBefore} />

    if (formatOnBlur) {
        control =
            <Input
                {...input} 
                style={style}
                placeholder={placeholder} 
                type={type} 
                prefix={prefix} 
                addonBefore={addonBefore} 
                onBlur={(e) => {
                    formatOnBlur(e);
                    input.onBlur(e);
                }} />
    }

    if (formItem) {
        control = 
            <Form.Item
                className={className}
                label={fieldLabel}
                validateStatus={validateStatus}
                help={help}
                hasFeedback={hasFeedback}
                labelCol={labelCol}
                wrapperCol={wrapperCol}>
                    {control}
            </Form.Item>
    }

    return control;

}

input.defaultProps = {};

input.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    addonBefore: PropTypes.object,
    formatOnBlur: PropTypes.func,
    formItem: PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        labelCol: PropTypes.object,
        tooltip: PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        }),
        wrapperCol: PropTypes.object,
        hasFeedback: PropTypes.bool
    }),
    meta: PropTypes.shape({ 
        touched: PropTypes.bool.isRequired, 
        error: PropTypes.string, 
        warning: PropTypes.string})
}

export default input;