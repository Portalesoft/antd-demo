import React from 'react';
import PropTypes from 'prop-types';
import { Cascader } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

const cascader = ({
    input,
    style,
    placeholder,
    options,
    formItem,
    meta
}) => {
    console.log('Cascader:', input.value);
    return (
        <Cascader
            {...input} 
            style={style}
            value={input.value === '' ? [] : input.value}
            options={options}
            placeholder={placeholder} />
    );
}

cascader.defaultProps = {
    placeholder: null
};

cascader.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    options: PropTypes.array
};

export default withFormItem(cascader);

