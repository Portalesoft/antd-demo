import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, email } from 'redux-form-validators'
import { Button, Divider, Alert } from 'antd';
import { Input } from '../../components/UI/AntDesign';

import * as actions from '../../store/actions';
import './Login.css'

class Login extends Component {
    
    submit = (values) => {
        console.log('Received values of login form: ', values);
        this.props.onLogin(values.Username, values.Password);
    }

    render() {

        const { handleSubmit, isAuthenticating, onSignupHandler } = this.props;
        return (
            <div className="Login">
                <div className="Header">Ant Design</div>
                <form onSubmit={handleSubmit(this.submit)}>
                    {this.props.loginError ? 
                        <Alert
                            style={{marginBottom: '20px'}}
                            message="Login Failure"
                            description="The username or password is incorrect"
                            type="error"
                            showIcon
                        /> : null}
                    <Field 
                        name="Username" 
                        component={Input} 
                        style={{ marginBottom: '24px' }}
                        placeholder="Username" 
                        validate={[required(), email()]}
                        icon="user" />
                    <Field 
                        name="Password" 
                        component={Input} 
                        type="password" 
                        style={{ marginBottom: '24px' }}
                        placeholder="Password" 
                        validate={required()}
                        icon="lock" />
                    <Button type="primary" htmlType="submit" disabled={isAuthenticating} style={{width: '100%'}}>
                        Login
                    </Button>      
                    <Divider>or</Divider>              
                    <Button disabled={isAuthenticating} onClick={onSignupHandler} style={{width: '100%'}}>
                        Sign Up
                    </Button>                    
                </form>
            </div>
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
        onLogin: (email, password) => dispatch(actions.loginUser(email, password))
    };
};

const connectedReduxForm = reduxForm({ 
    form: 'login' 
})(Login)

export default connect(mapStateToProps, mapDispatchToProps)(connectedReduxForm);