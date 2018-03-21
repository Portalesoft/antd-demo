import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const select = ({
    input,
    style,
    mode,
    placeholder,
    showSearch,
    optionFilterProp,
    filterOption,
    options,
    formItem,
    meta
}) => (
    <Select
        {...input} 
        style={style}
        mode={mode}
        placeholder={placeholder} 
        showSearch={showSearch}
        optionFilterProp={optionFilterProp}
        value={input.value === '' && (mode === 'multiple' || mode === 'tags') ? [] : input.value}
        filterOption={filterOption}>
            {options.map(option => 
                <Select.Option 
                    key={option.value} 
                    value={option.value}
                    disabled={option.disabled}>
                        {option.text}
                </Select.Option>)}
    </Select>
);

select.defaultProps = {
    mode: 'default'
};

select.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    mode: PropTypes.oneOf(['default', 'multiple', 'tags', 'combobox']),
    placeholder: PropTypes.string,
    showSearch: PropTypes.bool,
    optionFilterProp: PropTypes.string,
    filterOption: PropTypes.func,
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

