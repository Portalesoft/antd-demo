import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Input as AntInput } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

class Input extends Component { 

    registerControl = (control) => {
        const { input, registerControl } = this.props;
        if (registerControl) {
            registerControl(input.name, control);
        }
    }

    render () {

        const { input, formItem, registerControl, formatOnBlur, icon, ...custom } = this.props;
        let prefix = null;
        if (icon) {
            prefix = <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
        }

        return (
            <AntInput
                {...input} 
                {...custom}
                disabled={custom.disabled || custom.meta.asyncValidating}
                ref={input => this.registerControl(input)}
                prefix={prefix}
                onBlur={(e) => {
                    formatOnBlur(e);
                    input.onBlur(e);
                }} />
        );

    }

}

Input.defaultProps = {
    formatOnBlur: () => {},
    placeholder: null
};

Input.propTypes = {
    icon: PropTypes.string,
    formatOnBlur: PropTypes.func,
    registerControl: PropTypes.func
};

export default withFormItem(Input);