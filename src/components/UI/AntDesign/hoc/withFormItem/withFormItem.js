import React from 'react';
import PropTypes from 'prop-types';
import { Form, Tooltip, Icon } from 'antd';

const formatMessage = (label, name, message) => {
    if (message) {
        return message.charAt(0) === "$" ? message.substr(1) : `${label ? label : name} ${message}`; 
    }
    return null;
}

const checkFieldStatus = (name, label, asyncValidating, touched, error, warning) => {
    let validateStatus = touched ? "success" : null;
    let help = null;
    if (asyncValidating) {
        validateStatus = "validating";
    } else {
        if (touched) {
            if (error) {
                validateStatus = "error";
                help = formatMessage(label, name, error);
            } else if (warning) {
                validateStatus = "warning";
                help = formatMessage(label, name, warning);                
            } 
        }    
    }
    return { validateStatus, help };
}

const formItemLabel = (label, tooltip) => {
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
    return fieldLabel;
}

const withFormItem = (FormField) => {

    return (props) => {

        let control = <FormField {...props} />;
        if (props.formItem) {
            const { className, label, tooltip, labelCol, wrapperCol, hasFeedback, extra } = props.formItem || {};
            const { asyncValidating, touched, error, warning } = props.meta || {};
            const { validateStatus, help } = checkFieldStatus(props.input.name, label, asyncValidating, touched, error, warning) || {};
            const fieldLabel = formItemLabel(label, tooltip);
            control = 
                <Form.Item
                    className={className}
                    label={fieldLabel}
                    validateStatus={validateStatus}
                    help={help}
                    extra={extra}
                    hasFeedback={hasFeedback}
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}>
                        {control}
                </Form.Item>
        }

        return control;

    };

};

withFormItem.propTypes = {
    formItem: PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
        extra: PropTypes.string,
        tooltip: PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        }),
        hasFeedback: PropTypes.bool
    }),
    meta: PropTypes.object
}

export default withFormItem;