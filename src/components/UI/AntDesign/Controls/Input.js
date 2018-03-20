import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const input = ({
    input,
    type,
    style,
    icon,
    placeholder,
    addonBefore,
    addonAfter,
    formatOnBlur,
    formItem,
    meta
}) => {

    let prefix = null;
    if (icon) {
        prefix = <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
    }

    let control = 
        <Input
            {...input} 
            type={type} 
            style={style}
            placeholder={placeholder} 
            prefix={prefix} 
            addonBefore={addonBefore} 
            addonAfter={addonAfter} />

    if (formatOnBlur) {
        control =
            <Input
                {...input} 
                type={type} 
                style={style}
                placeholder={placeholder} 
                prefix={prefix} 
                addonBefore={addonBefore} 
                addonAfter={addonAfter} 
                onBlur={(e) => {
                    formatOnBlur(e);
                    input.onBlur(e);
                }} />
    }

    return control;

}

input.defaultProps = {
    placeholder: null
};

input.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    addonBefore: PropTypes.object,
    addonAfter: PropTypes.object,
    formatOnBlur: PropTypes.func
};

export default withFormItem(input);