import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const input = ({
    input,
    formItem,
    formatOnBlur,
    icon,
    ...custom
}) => {

    let prefix = null;
    if (icon) {
        prefix = <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
    }

    return (
        <Input
            {...input} 
            {...custom}
            disabled={custom.disabled || custom.meta.asyncValidating}
            prefix={prefix}
            onBlur={(e) => {
                formatOnBlur(e);
                input.onBlur(e);
            }} />
    );
}

input.defaultProps = {
    formatOnBlur: () => {},
    placeholder: null
};

input.propTypes = {
    icon: PropTypes.string,
    formatOnBlur: PropTypes.func
};

export default withFormItem(input);