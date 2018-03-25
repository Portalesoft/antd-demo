import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const checkbox = ({
    input,
    formItem,
    content,
    ...custom
}) => {

    return (
        <Checkbox
            {...input}   
            {...custom}
            checked={input.value !== '' ? input.value : false}>
                {content}
        </Checkbox>
    );
};
    
checkbox.defaultProps = {
    content: null
};

checkbox.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default withFormItem(checkbox);