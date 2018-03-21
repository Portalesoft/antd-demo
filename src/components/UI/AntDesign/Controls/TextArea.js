import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const textArea = ({
    input,
    style,
    placeholder,
    autosize,
    formItem,
    meta
}) => (
    <Input.TextArea
        {...input}   
        style={style} 
        placeholder={placeholder}
        autosize={autosize} />
);

textArea.defaultProps = {
    autosize: true
};

textArea.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    autosize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            minRows: PropTypes.number,
            maxRows: PropTypes.number
        })
    ])

};

export default withFormItem(textArea);