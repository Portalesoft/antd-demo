import React from 'react';
import { Input } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const textArea = ({
    input,
    formItem,
    ...custom
}) => (
    <Input.TextArea
        {...input}   
        {...custom} />
);

textArea.defaultProps = {
    autosize: true
};

export default withFormItem(textArea);