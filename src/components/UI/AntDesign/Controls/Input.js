import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Tooltip, Input } from 'antd';
import { formatMessage } from '../Utility/Utility';

import './Styles/Controls.css';

const input = ({
    input,
    caption,
    label,
    placeholder,
    type,
    icon,
    style,
    className,
    labelCol,
    wrapperCol,
    hasFeedback,
    prefixSelector,
    tooltip,
    meta: { touched, error, warning }
}) => {

    let validateStatus = touched ? "success" : null;
    let help = null;
    if (touched) {
        if (error) {
            validateStatus = "error";
            help = formatMessage(caption, label, input.name, error);
        } else if (warning) {
            validateStatus = "warning";
            help = formatMessage(caption, label, input.name, warning);                
        } 
    }

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

    return (
        <Form.Item
            className={className}
            label={fieldLabel}
            validateStatus={validateStatus}
            help={help}
            hasFeedback={hasFeedback}
            labelCol={labelCol}
            wrapperCol={wrapperCol}>
            <Input
                {...input} 
                placeholder={placeholder} 
                type={type} 
                style={style}
                prefix={prefix} 
                addonBefore={prefixSelector} />
        </Form.Item>
    );

}

input.propTypes = {
    input: PropTypes.object.isRequired,
    caption: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    hasFeedback: PropTypes.bool,
    prefixSelector: PropTypes.object,
    tooltip: PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }),
    meta: PropTypes.shape({ 
        touched: PropTypes.bool.isRequired, 
        error: PropTypes.string, 
        warning: PropTypes.string})
}

export default input;