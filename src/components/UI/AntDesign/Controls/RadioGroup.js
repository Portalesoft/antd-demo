import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const radioGroup = ({
    input,
    formItem,
    radios,
    ...custom
}) => (
    <Radio.Group
        {...input}                 
        {...custom}
        value={input.value}>
            {radios.map(radio => 
                <Radio 
                    key={radio.value} 
                    value={radio.value}
                    disabled={radio.disabled}>
                        {radio.text}
                </Radio>)}
    </Radio.Group>        
);


radioGroup.propTypes = {
    radios: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            disabled: PropTypes.bool
        })
    )    
};

export default withFormItem(radioGroup);