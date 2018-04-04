import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from 'redux-form-validators'
import { Form, Button } from 'antd';
import { Input, Select, singleColumnFormItemLayout, singleColumnNoLabelFormItemLayout } from '../../../../../../components/UI/AntDesign';

import './KPI.css';

const FormItem = Form.Item;

const submit = (values) => {
    console.log('KPI form submitted values:', values);
}

const kpi = (props) => {

    const frequencyList =   [
        { value: 'Daily', text: 'Daily' },
        { value: 'Weekly', text: 'Weekly' },
        { value: 'Monthly', text: 'Monthly' },
        { value: 'Quarterly', text: 'Quarterly' },
        { value: 'Yearly', text: 'Yearly' }
    ];

    const { handleSubmit } = props;
    return (
        <div className="KPI">
            <FormItem {...singleColumnNoLabelFormItemLayout}>
                <h2>{props.initialValues ? 'Edit this KPI' : 'Add a KPI'}</h2>
            </FormItem>                                        
            <Field 
                name="name" 
                component={Input} 
                validate={[required()]} 
                formItem={{
                    className: "Mandatory",
                    label: "KPI Name",
                    ...singleColumnFormItemLayout                                                    
                }} />
            <Field 
                name="description" 
                component={Input} 
                formItem={{
                    label: "Add a description (optional)",
                    ...singleColumnFormItemLayout                                                    
                }} />
            <Field 
                name="frequency" 
                component={Select} 
                options={frequencyList}
                formItem={{
                    label: "When will this KPI be entered?",
                    ...singleColumnFormItemLayout                                                    
                }} />
            <Field component="input" name="key" type="hidden" />
            <FormItem {...singleColumnNoLabelFormItemLayout} style={{marginTop: '20px'}}>
                <Button onClick={handleSubmit(submit)} type="primary" style={{marginRight: '8px'}}>Save</Button>
                <Button onClick={props.cancelled}>Cancel</Button>
            </FormItem>                                        
        </div>
    );

}

export default reduxForm({
    form: 'kpi'
})(kpi);