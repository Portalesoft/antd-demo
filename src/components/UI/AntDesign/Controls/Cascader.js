import React, { Component } from 'react';
import { Cascader as AntCascader } from 'antd';

import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

class Cascader extends Component { 

    state = {
        previousValues: []
    }

    updatePreviousValues = (e) => {

        // Redux + Cascader has a bug where selecting an existing value to edit resets the redux value
        // and calls into the render method with an empty string. In this instance we will need to use the previous
        // values to ensure we don't lose the correct state
        this.setState({previousValues: e});

    }

    render () {

        const { input, formItem, ...custom } = this.props;
        return (
            <AntCascader
                {...input} 
                {...custom}
                value={input.value.length === 0 ? this.state.previousValues : input.value}
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

export default withFormItem(Cascader);

