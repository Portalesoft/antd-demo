import React from 'react';
import PropTypes from 'prop-types';
import { Form, Tooltip, Select, Icon } from 'antd';
import { formatMessage } from '../Utility/Utility';

import './Styles/Controls.css';

const select = ({
    input,
    isFormItem,
    caption,
    label,
    placeholder,
    showSearch,
    optionFilterProp,
    filterOption,
    style,
    className,
    labelCol,
    wrapperCol,
    tooltip,
    options,
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
        <Select
            {...input} 
            style={style}
            placeholder={placeholder} 
            showSearch={showSearch}
            optionFilterProp={optionFilterProp}
            filterOption={filterOption}>
                {options.map(option => 
                    <Select.Option 
                        key={option.value} 
                        value={option.value}
                        disabled={option.disabled}>
                            {option.text}
                    </Select.Option>)}
        </Select>

    if (isFormItem) {
        control = 
            <Form.Item
                className={className}
                label={fieldLabel}
                validateStatus={validateStatus}
                help={help}
                labelCol={labelCol}
                wrapperCol={wrapperCol}>
                    {control}
            </Form.Item>
    }
    
    return control;

}

select.defaultProps = {
    isFormItem: true,
    allowClear: false
};

select.propTypes = {
    input: PropTypes.object.isRequired,
    isFormItem: PropTypes.bool,
    caption: PropTypes.string,
    label: PropTypes.string,
    showSearch: PropTypes.bool,
    optionFilterProp: PropTypes.string,
    filterOption: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    tooltip: PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            disabled: PropTypes.bool
        })
    ),
    meta: PropTypes.shape({ 
        touched: PropTypes.bool.isRequired, 
        error: PropTypes.string, 
        warning: PropTypes.string})
}

export default select;

