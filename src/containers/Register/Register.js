import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, email } from 'redux-form-validators'
import { Form as AntForm, Button, Alert } from 'antd';
import { Input, Select, Checkbox, formItemLayout, tailFormItemLayout } from '../../components/UI/AntDesign';
import Form from '../../components/Forms/Form/Form';

import * as normalize from '../../components/Forms/Utility/Normalize';
import * as filter from '../../components/Forms/Utility/Filter';
import * as actions from '../../store/actions';
import './Register.css'

const FormItem = AntForm.Item;

class Register extends Component {
    
    submit = (values) => {
        console.log('Received values of registration form: ', values);
        this.props.onRegister(values.Username, values.Password);
    }

    render() {

        const offices = [
            {value: 'langley', text: 'Langley'},
            {value: 'coventry', text: 'Coventry'},
            {value: 'hongkong', text: 'Hong Kong'}
        ];

        const areaCodes = [
            {value: '44', text: '+44'},
            {value: '852', text: '+852'}
        ];

        const { handleSubmit } = this.props;
        return (
            <Form 
                title="Ant Design Registration" 
                onSubmitHandler={handleSubmit(this.submit)}
                className="Register">
                {this.props.loginError ? 
                    <Alert
                        style={{marginBottom: '20px'}}
                        message="Registration Failure"
                        description="The username has already been registered"
                        type="error"
                        showIcon
                    /> : null}
                <Field 
                    name="Username" 
                    component={Input} 
                    validate={[required(), email()]} 
                    formItem={{
                        className: "Mandatory",
                        label: "Email",
                        ...formItemLayout                                                    
                    }} />
                <Field 
                    name="Password" 
                    component={Input} 
                    type="password" 
                    validate={required()}
                    formItem={{
                        className: "Mandatory",
                        label: "Password",
                        ...formItemLayout                                                    
                    }} />
                <Field 
                    name="Confirm" 
                    component={Input} 
                    type="password" 
                    validate={required()}
                    formItem={{
                        className: "Mandatory",
                        label: "Confirm Password",
                        ...formItemLayout                                                    
                    }} />
                <Field 
                    name="Nickname" 
                    component={Input} 
                    validate={required()}
                    formItem={{
                        className: "Mandatory",
                        label: "Nickname",
                        tooltip: { title: "What do you want others to call you?", icon: "question-circle-o" },
                        ...formItemLayout                                                    
                    }} />
                <Field                     
                    name="Office" 
                    component={Select}
                    defaultValue="langley"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={filter.likeMatch}
                    validate={required()}
                    options={offices} 
                    formItem={{
                        className: "Mandatory",
                        label: "Office",
                        ...formItemLayout                                                    
                    }} />
                <Field 
                    name="Phone" 
                    component={Input} 
                    style={{ width: '100%' }}
                    validate={required()}
                    normalize={normalize.toInteger}
                    addonBefore={
                        <Field
                            name="AreaCode"
                            component={Select}
                            style={{ width: 80 }} 
                            options={areaCodes} />
                    }
                    formItem={{
                        className: "Mandatory",
                        label: "Phone Number",
                        ...formItemLayout                                                    
                    }} />
                <Field
                    name="Agreement"
                    content={<span>I have read the <a href="">agreement</a></span>}
                    component={Checkbox}
                    formItem={{
                        ...tailFormItemLayout                                                    
                    }} />
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>Register</Button>
                    <a onClick={this.props.onLoginHandler}>Back to Login</a>
                </FormItem>                        
            </Form>
        );
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticating: state.login.authenticating,
        isLoggedIn: state.login.token !== null,
        loginError: state.login.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (email, password) => dispatch(actions.registerUser(email, password))
    };
};

const validate = (values) => {
    const errors = {};
    if (values.Password !== values.Confirm) {
        errors.Confirm = "$The passwords do not match";
    }
    return errors;
}

const connectedReduxForm = reduxForm({ 
    form: 'register',
    validate,
    initialValues: {
        AreaCode: "44",
        Office: "langley"
    },
    enableReinitialize: true
})(Register);

export default connect(mapStateToProps, mapDispatchToProps)(connectedReduxForm);