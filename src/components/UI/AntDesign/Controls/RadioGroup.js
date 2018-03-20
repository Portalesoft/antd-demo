import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const radioGroup = ({
    input,
    style,
    radios,
    formItem,
    meta
}) => (
    <Radio.Group
        {...input}                 
        style={style} 
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


radioGroup.defaultProps = {};
radioGroup.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    radios: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            disabled: PropTypes.bool
        })
    )    
};

export default withFormItem(radioGroup);