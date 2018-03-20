import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker } from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

class RangePicker extends Component {

    state = {
        previousValues: []
    }

    updatePreviousValues = (e) => {

        // Redux + Range picker have a bug where selecting an existing value to edit loses the moment objects
        // and calls into render method with just a string for the left or right side of the date values
        // that was clicked, in this instance we will use the stored state moments to override the redux version
        this.setState({previousValues: e});

    }

    calculateValues = (previousValues, format) => {

        // Null string or empty array, this will happen with no initial value
        if (previousValues.length === 0) {
            return null;
        }

        // String value, which will indicate either left or right hand side of the clicked range control value
        if (typeof previousValues === 'string') {
            return this.state.previousValues;
        }

        // Normal value processing, format the redux string values to moments
        return [moment(previousValues[0], format), moment(previousValues[1], format)];
    }

    render() {

        const { input, style, placeholder, showTime } = this.props;
        const format = showTime ? 'MMM DD YYYY HH:mm' : 'MMM DD YYYY'
        return (
            <DatePicker.RangePicker 
                {...input}        
                style={style} 
                value={this.calculateValues(input.value, format)}
                format={format}
                showTime={showTime}
                placeholder={placeholder} 
                onChange={(e) => {
                    this.updatePreviousValues(e);
                    input.onBlur(e);
                }} />
        );
        
    }

}

RangePicker.defaultProps = {
    showTime: false,
    placeholder: [null, null]
};

RangePicker.propTypes = {
    input: PropTypes.object.isRequired,
    style: PropTypes.object,
    placeholder: PropTypes.array,
    showTime: PropTypes.bool
};

export default withFormItem(RangePicker);