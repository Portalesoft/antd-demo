import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cascader as AntCascader } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

class Cascader extends Component { 

    state = {
        previousValues: []
    }

    updatePreviousValues = (e) => {

        // Redux + Casccader have a bug where selecting an existing value to edit resets the redux value
        // and calls into the render method with an empty string. In this instance we will need to use the previous
        // values to ensure we don't lose the correct state
        this.setState({previousValues: e});

    }

    shouldComponentUpdate(nextProps, nextState) {

        // Ignore the redux resets when the cascader drop down is clicked
        return nextProps.input.value !== this.state.previousValues && 
               nextProps.input.value.length >= this.state.previousValues.length;

    }

    render () {

        const { input, style, placeholder, options } = this.props;
        return (
            <AntCascader
                {...input} 
                style={style}
                value={input.value.length === 0 ? this.state.previousValues : input.value}
                options={options}
                placeholder={placeholder} 
                onChange={(e) => {
                    this.updatePreviousValues(e);
                    input.onChange(e);
                }} />
        );
 
    }

}

Cascader.defaultProps = {
    placeholder: null
};

Cascader.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    options: PropTypes.array
};

export default withFormItem(Cascader);

