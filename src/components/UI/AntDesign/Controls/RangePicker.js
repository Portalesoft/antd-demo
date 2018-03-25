import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

class RangePicker extends Component {

    state = {
        previousValues: []
    }

    updatePreviousValues = (e) => {

        // Redux + Range picker has a bug where selecting an existing value to edit loses the moment objects
        // and calls into render method with just a string for the left or right side of the date values
        // that was clicked, in this instance we will use the stored state moments to override the redux version
        this.setState({previousValues: e});

    }

    shouldComponentUpdate(nextProps, nextState) {

        // Ignore the redux resets when the range drop down is clicked
        return (typeof nextProps.input.value !== 'string' || 
               (typeof nextProps.input.value === 'string' && nextProps.input.value.length === 0));
    }

    render () {

        const { input, formItem, ...custom } = this.props;
        const format = custom.showTime ? 'MMM DD YYYY HH:mm' : 'MMM DD YYYY'
        return (
            <DatePicker.RangePicker 
                {...input}    
                {...custom}    
                format={format}
                value={input.value.length === 0 ? null : [moment(input.value[0], format), moment(input.value[1], format)]}
                onChange={(e) => {
                    this.updatePreviousValues(e);
                    input.onChange(e);
                }} />
        );
        
    }

}

RangePicker.defaultProps = {
    placeholder: [null, null]
};

export default withFormItem(RangePicker);