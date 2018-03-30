import React, { Component } from 'react';
import moment, { isMoment } from 'moment';
import { DatePicker as AntDatePicker} from 'antd';
import withFormItem from '../hoc/withFormItem/withFormItem';

import './Styles/Controls.css';

class DatePicker extends Component {

    shouldComponentUpdate(nextProps, nextState) {

        // IE 11 gets into an infinite update loop, so we need to be careful what is allowed through as updates ...
        const isNextMoment = isMoment(nextProps.input.value);
        const isCurrentMoment = isMoment(this.props.input.value);
        return (nextProps.input.value === '' && nextProps.input.value !== this.props.input.value) ||
               (isNextMoment && (!isCurrentMoment || !nextProps.input.value.isSame(this.props.input.value)));

    }

    render () {

        // Ensure that empty strings, from field resets, are allowed through but treated as null moment values
        const { input, formItem, ...custom } = this.props;
        const dateFormat = custom.showTime ? 'MMM DD YYYY HH:mm' : 'MMM DD YYYY'
        return (
            <AntDatePicker 
                {...input}    
                {...custom} 
                format={dateFormat} 
                value={input.value !== '' ? moment(input.value, dateFormat) : null} />
        );

    }
 
}
    
DatePicker.defaultProps = {
    placeholder: null
};
    
export default withFormItem(DatePicker);

