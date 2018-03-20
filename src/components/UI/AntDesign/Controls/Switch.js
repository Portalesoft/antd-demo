import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const switchControl = ({
    input,
    style,
    formItem,
    meta
}) => (
    <Switch
        {...input}                 
        style={style} 
        defaultChecked={input.value !== '' ? input.value : false} />
);

switchControl.defaultProps = {};
switchControl.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object
};

export default withFormItem(switchControl);