import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Alert } from 'antd';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../config/axios-authentication';

import * as actions from '../../store/actions';
import './Login.css';

const FormItem = Form.Item;

class Login extends Component {
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((error, values) => {
          if (!error) {
            console.log('Received values of login form: ', values);
            this.props.onLogin(values.email, values.password);
          }
        });
      }

    render() {
        const { getFieldDecorator } = this.props.form;        
        return (
            <div className="Login">
                <div className="Header">Ant Design</div>
                <Form onSubmit={this.handleSubmit}>
                    {this.props.error ? 
                        <Alert
                        style={{marginBottom: '20px'}}
                        message="Login Failure"
                        description="The username or password is incorrect"
                        type="error"
                        showIcon
                        /> : null}
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'Please enter a valid email address',
                            }, {
                                required: true, message: 'Please enter your email address',
                            }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>                
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please enter your password',
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" disabled={this.props.isAuthenticating} htmlType="submit" style={{width: '100%'}}>
                            Login
                        </Button>                    
                    </FormItem>   
                </Form>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticating: state.login.authenticating,
        isLoggedIn: state.login.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actions.loginUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withErrorHandler(Login, axios)));
