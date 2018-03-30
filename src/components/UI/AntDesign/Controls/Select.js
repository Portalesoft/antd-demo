import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const select = ({
    input,
    formItem,
    options,
    ...custom
}) => (
    <Select
        {...input} 
        {...custom}
        disabled={custom.disabled || custom.meta.asyncValidating}
        value={(input.value === '' && (custom.mode === 'multiple' || custom.mode === 'tags') ? [] : 
               (input.value === '' && (custom.mode !== 'multiple' && custom.mode !== 'tags') ? undefined : input.value ))}>
            {options.map(option => 
                <Select.Option 
                    key={option.value} 
                    value={option.value}
                    disabled={option.disabled}>
                        {option.text}
                </Select.Option>)}
    </Select>
);

select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.string.isRequired,
                PropTypes.number.isRequired
            ]),
            text: PropTypes.string.isRequired,
            disabled: PropTypes.bool
        })
    )    
};

export default withFormItem(select);

