import React from 'react';
import { Switch } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const switchControl = ({
    input,
    formItem,
    ...custom
}) => (
    <Switch
        {...input}
        {...custom}                 
        checked={input.value !== '' ? input.value : false} />
);

export default withFormItem(switchControl);