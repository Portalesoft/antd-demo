import React, { Component } from 'react';
import Form from './Form/Form';
import { connect } from 'react-redux';
import { Field, reduxForm, formValues } from 'redux-form';
import { required, length } from 'redux-form-validators'
import { isMoment } from 'moment';
import { Alert, Row, Col, Button, Divider, Modal, message, Form as AntForm } from 'antd';
import { Input, Checkbox, Select, DatePicker, formItemLayout } from '../../components/UI/AntDesign';

import * as actions from '../../store/actions';
import * as normalize from './Utility/Normalize';
import * as format from './Utility/Format';
import * as filter from './Utility/Filter';

const FormItem = AntForm.Item;
const confirm = Modal.confirm;

class Validation extends Component {
    
    submitHandler = (values) => {
        if (Object.keys(this.props.warn(values)).length > 0) {
            confirm({
                title: 'Warnings',
                content: 'There are warnings present on the form. Do you still wish to submit the data?',
                okText: 'Yes',
                cancelText: 'No',
                onOk() {
                    message.success('Form successfully submitted!');
                }
              });
        } else {
            message.success('Form successfully submitted!');
        }
    }

    loadHandler = (id) => {  
        this.props.onValidationLoad(id);     
    }

    componentDidUpdate(prevProps, prevState) {
        // This is a hack to mark all fields as touched and force validation updates
        // once loading has completed https://github.com/erikras/redux-form/issues/2692
        if (prevProps.isLoading && !this.props.isLoading) {
            setTimeout(this.props.handleSubmit(()=>{}), 0);
        }
    }

    render () {

        const { handleSubmit, pristine, reset, submitting, asyncValidating, validationError, isLoading } = this.props;
    
        const offices = [
            {value: 'langley', text: 'Langley'},
            {value: 'coventry', text: 'Coventry'},
            {value: 'datchet', text: 'Datchet'},
            {value: 'hongkong', text: 'Hong Kong'}
        ];
    
        return (
            <Form   
                title="Form Validation and Control" 
                onSubmitHandler={handleSubmit(this.submitHandler)}>
                <Alert
                    message="Information"
                    description="Initialise will populate the form with an initial set of values to simulate data from the server. Undo changes will reset all user changes to blank values or the initial values once they have been loaded. All operations use an additional one second delay to simulate network activity."
                    style={{ marginBottom: '16px' }}
                    type="info"
                    closeText="Close"
                    showIcon />     
                { validationError && 
                    <Alert 
                        message={ validationError } 
                        type="error" 
                        style={{ marginBottom: '16px' }} /> }
                <Row>
                    <Col span={24} md={{ span: 12 }}>
                        <Field
                            name="Mandatory" 
                            component={Input} 
                            validate={required()}
                            formItem={{
                                className: "Mandatory",
                                label: "Mandatory",
                                ...formItemLayout                                                    
                            }} />      
                        <Field                     
                            name="Warning" 
                            component={Select}
                            showSearch
                            optionFilterProp="children"
                            filterOption={filter.likeMatch}
                            options={offices} 
                            formItem={{
                                label: "Warning",
                                ...formItemLayout                                                    
                            }} />
                        <Field
                            name="StartDate" 
                            component={DatePicker} 
                            formItem={{
                                label: "Start Date",
                                tooltip: { title: "Start Date must be before End Date", icon: "info-circle-o" },
                                ...formItemLayout
                                }} />
                        <Field
                            name="MaxLength" 
                            component={Input} 
                            normalize={normalize.normalizeAll([normalize.toInteger, normalize.maxLength(5)])}
                            style={{ width: '50%' }}                        
                            formItem={{
                                label: "Max Length",
                                tooltip: { title: "Integer field has a max length of 5", icon: "info-circle-o" },
                                ...formItemLayout                                                    
                            }} />      
                        <Field
                            name="GBP" 
                            component={Input} 
                            style={{ width: '50%' }}          
                            addonBefore={<span>£</span>}                
                            normalize={normalize.toDecimal(2)}                        
                            formatOnBlur={format.toDecimal(2)}
                            onChange={(event, newValue, previousValue) => {
                                const conversion = Math.round(Number.parseFloat(newValue) * 1.41 * 1e2) / 1e2;
                                this.props.change('USD',  isNaN(conversion) ? null : conversion.toFixed(2));
                            }}
                            formItem={{
                                label: "GBP",
                                ...formItemLayout                                                    
                            }} />      
                        <Field                     
                            name="AsyncChange" 
                            component={Select}
                            showSearch
                            optionFilterProp="children"
                            filterOption={filter.likeMatch}
                            options={offices} 
                            formItem={{
                                label: "Async Change",
                                tooltip: { title: "Example of asynchronous onChange validation - Select Datchet for error", icon: "info-circle-o" },
                                ...formItemLayout                                                    
                            }} />
                        <FormItem
                            {...formItemLayout}
                            label="Enabled"
                            className={ this.props.isEnabled ? "Mandatory" : null }
                            extra={ this.props.isEnabled ? null : "Enabled and required if ticked" }>
                            <div style={{ display: 'inline-flex' }}>
                                <Field
                                    name="CombinedEnable"
                                    component={Checkbox} />
                                <Field
                                    name="Enabled" 
                                    component={Input} 
                                    disabled={ !this.props.isEnabled }
                                    validate={ this.props.isEnabled ? required() : null }
                                    formItem={{}} />
                            </div>
                        </FormItem>                                                      
                    </Col>
                    <Col span={24} md={{ span: 12 }}>
                        <Field
                            name="Feedback" 
                            component={Input} 
                            validate={required()}
                            formItem={{
                                label: "Feedback",
                                hasFeedback: true,
                                ...formItemLayout
                                }} />
                        <Field
                            name="FutureFeedback" 
                            component={DatePicker} 
                            formItem={{
                                label: "Future Feedback",
                                hasFeedback: true,
                                ...formItemLayout
                                }} />
                        <Field
                            name="EndDate" 
                            component={DatePicker} 
                            formItem={{
                                label: "End Date",
                                tooltip: { title: "End Date must be after Start Date", icon: "info-circle-o" },
                                ...formItemLayout
                                }} />
                        <Field
                            name="MinLength" 
                            component={Input} 
                            validate={length({ min: 5 })}                        
                            formItem={{
                                label: "Min Length",
                                tooltip: { title: "Field must be at least 5 characters", icon: "question-circle-o" },
                                ...formItemLayout                                                    
                            }} />      
                        <Field
                            name="USD" 
                            component={Input} 
                            style={{ width: '50%' }}                        
                            addonBefore={<span>$</span>}                
                            normalize={normalize.toDecimal(2)}                        
                            formatOnBlur={format.toDecimal(2)}
                            onChange={(event, newValue, previousValue) => {
                                const conversion = Math.round(Number.parseFloat(newValue) * 0.71 * 1e2) / 1e2;
                                this.props.change('GBP',  isNaN(conversion) ? null : conversion.toFixed(2));
                            }}
                            formItem={{
                                label: "USD",
                                ...formItemLayout                                                    
                            }} />      
                        <Field
                            name="AsyncBlur" 
                            component={Input} 
                            formItem={{
                                label: "Async Blur",
                                tooltip: { title: "Example of asynchronous onBlur validation - Type blur for error and set focus away from control", icon: "info-circle-o" },
                                ...formItemLayout                                                    
                            }} />      
                        <FormItem
                            {...formItemLayout}
                            label="Visible"
                            className={ this.props.isVisible ? "Mandatory" : null }
                            extra={ this.props.isVisible ? null : "Visible and required if ticked" }>
                            <div style={{ display: 'flex' }}>
                                <Field
                                    name="CombinedVisible"
                                    component={Checkbox} />
                                { this.props.isVisible ? 
                                    <Field
                                    name="Visible" 
                                    component={Input} 
                                    validate={ this.props.isVisible ? required() : null }
                                    formItem={{}} /> : null }
                            </div>
                        </FormItem>                                                      
                    </Col>
                </Row>   
                <Divider />
                <Button 
                    type="primary" 
                    htmlType="submit" 
                    icon="upload" 
                    disabled={submitting || asyncValidating} 
                    style={{ marginRight: '10px', marginBottom: '10px' }}>
                        Submit
                </Button> 
                <Button 
                    onClick={() => this.loadHandler(123)} 
                    icon="sync" 
                    loading={isLoading} 
                    disabled={submitting || asyncValidating} 
                    style={{ marginRight: '10px', marginBottom: '10px' }}>
                        Initialise
                </Button> 
                <Button 
                    onClick={reset} 
                    icon="reload" 
                    disabled={pristine || submitting || asyncValidating}>
                        Undo Changes
                </Button> 
            </Form>
        );

    }

}

const warnings = values => {
    const warnings = {};
    if (!values.Warning) {
        warnings.Warning = "$Are you sure you don't know?";
    }
    if (!values.FutureFeedback || (isMoment(values.FutureFeedback) && values.FutureFeedback.isBefore())) {
        warnings.FutureFeedback = "$Please select a date in the future"
    }
    return warnings;
}

const validate = values => {
    const validate = {};
    if (isMoment(values.StartDate) && isMoment(values.EndDate)) {
        if (values.StartDate.isSameOrAfter(values.EndDate)) {
            validate.StartDate = " must be before End Date";
        }
        if (values.EndDate.isSameOrBefore(values.StartDate)) {
            validate.EndDate = " must be after Start Date";
        }
    }
    return validate;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = (values, dispatch, props, currentField) => {

    // Would require one api call to validate all async validated fields ...
    return sleep(1000).then(() => {
        let errors = {};
        if (values.AsyncChange === 'datchet') {
            errors['AsyncChange'] = '$That office is now closed';
        }
        if (values.AsyncBlur === 'blur') {
            errors['AsyncBlur'] = '$Blur is not a valid value';
        }
        if (Object.keys(errors).length > 0) throw errors;
    });

}

const mapStateToProps = state => {
    return {
        isLoading: state.validation.loading,
        validationError: state.validation.error,
        initialValues: state.validation.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onValidationLoad: (id) => dispatch(actions.validationLoad(id))
    };
};

const connectedReduxForm = 
    reduxForm({
        form: 'validation',
        warn: warnings,
        validate,
        asyncValidate,
        asyncBlurFields: ['AsyncBlur'],
        asyncChangeFields: ['AsyncChange'],
        enableReinitialize: true,
        touchOnChange: true
    })(formValues({ 
        isEnabled: 'CombinedEnable',
        isVisible: 'CombinedVisible'
    })(Validation));

export default connect(mapStateToProps, mapDispatchToProps)(connectedReduxForm);