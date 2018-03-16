import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, email } from 'redux-form-validators'
import { Form, Button, Alert } from 'antd';
import { Input, Select, Checkbox } from '../../components/UI/AntDesign';

import * as actions from '../../store/actions';
import './Register.css'

class Register extends Component {
    
    submit = (values) => {
        console.log('Received values of registration form: ', values);
        this.props.onRegister(values.Username, values.Password);
    }

    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        };
  
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            }
        };

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
            <div className="Register">
                <div className="Header">Ant Design Registration</div>
                <form onSubmit={handleSubmit(this.submit)}>
                    {this.props.loginError ? 
                        <Alert
                            style={{marginBottom: '20px'}}
                            message="Registration Failure"
                            description="The username has already been registered"
                            type="error"
                            showIcon
                        /> : null}
                    <Field 
                        {...formItemLayout}                         
                        name="Username" 
                        label="Email"
                        component={Input} 
                        className="Mandatory" 
                        validate={[required(), email()]} />
                    <Field 
                        {...formItemLayout}
                        name="Password" 
                        label="Password"
                        type="password" 
                        component={Input} 
                        className="Mandatory" 
                        validate={required()} />
                    <Field 
                        {...formItemLayout}
                        name="Confirm" 
                        label="Confirm Password"
                        type="password" 
                        component={Input} 
                        className="Mandatory" 
                        validate={required()} />
                    <Field 
                        {...formItemLayout}
                        name="Nickname" 
                        label="Nickname"
                        component={Input} 
                        className="Mandatory"
                        tooltip={{ title: "What do you want others to call you?", icon: "question-circle-o" }} 
                        validate={required()} />
                    <Field 
                        {...formItemLayout}
                        name="Office" 
                        label="Office"
                        component={Select}
                        className="Mandatory"
                        defaultValue="langley"
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Location"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        validate={required()}
                        options={offices} />
                    <Field 
                        {...formItemLayout}
                        name="Phone"
                        label="Phone Number"
                        type="number"
                        component={Input} 
                        className="Mandatory"                        
                        style={{ width: '100%' }}
                        prefixSelector={
                            <Field
                                name="AreaCode"
                                component={Select}
                                style={{ width: 80 }} 
                                options={areaCodes} 
                                isAddonBefore />
                        }
                        validate={required()} />
                    <Field
                        {...tailFormItemLayout}
                        name="Agreement"
                        label={<span>I have read the <a href="">agreement</a></span>}
                        component={Checkbox}>
                    </Field> 
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>Register</Button>
                        <a onClick={this.props.onLoginHandler}>Back to Login</a>
                    </Form.Item>                        
                </form>
            </div>
        );
    }

    // <FormItem {...tailFormItemLayout}>
    // {getFieldDecorator('agreement', {
    //   valuePropName: 'checked',
    // })(
    //   <Checkbox>I have read the <a href="">agreement</a></Checkbox>
    // )}

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

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'register',
    validate,
    initialValues: {
        AreaCode: "44",
        Office: "langley"
    },
    enableReinitialize: true
})(Register));
