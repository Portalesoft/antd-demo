import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const checkbox = ({
    input,
    style,
    content,
    formItem,
    meta
}) => (
    <Checkbox
        {...input}   
        defaultChecked={input.value !== '' ? input.value : false}              
        style={style}>
            {content}
    </Checkbox>
);

checkbox.defaultProps = {};
checkbox.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default withFormItem(checkbox);