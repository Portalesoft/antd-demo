import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Input, Tooltip, Icon, Select, Checkbox, Button, Alert } from 'antd';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../config/axios-authentication';

import * as actions from '../../store/actions';
import './Register.css';

const FormItem = Form.Item;
const Option = Select.Option;

class Register extends Component {

    state = {
        confirmDirty: false
      };

      handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields((error, values) => {
          if (!error) {
            console.log('Received values of register form: ', values);
            this.props.onRegister(values.email, values.password);
          }
        });
      }

      handleConfirmBlur = (event) => {
        const value = event.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      }

      compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('The passwords do not match');
        } else {
          callback();
        }
      }

      validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }

      render() {

        const { getFieldDecorator } = this.props.form;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
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
          },
        };

        const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '44',
        })(
          <Select style={{ width: 80 }}>
            <Option value="44">+44</Option>
            <Option value="852">+852</Option>
          </Select>
        );
        
        return (
            <div className="Register">
                <div className="Header">Ant Design Registration</div>
                <Form onSubmit={this.handleSubmit}>
                  {this.props.error ? 
                          <Alert
                          style={{marginBottom: '20px'}}
                          message="Registration Failure"
                          description="The username or password is incorrect"
                          type="error"
                          showIcon
                          /> : null}
                  <FormItem
                    {...formItemLayout}
                    label="Email">
                    {getFieldDecorator('email', {
                      rules: [{
                        type: 'email', message: 'Please enter a valid email address',
                      }, {
                        required: true, message: 'Please enter your email address',
                      }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="Password">
                    {getFieldDecorator('password', {
                      rules: [{
                        required: true, message: 'Please enter your password',
                      }, {
                        validator: this.validateToNextPassword,
                      }],
                    })(
                      <Input type="password" />
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="Confirm Password">
                    {getFieldDecorator('confirm', {
                      rules: [{
                        required: true, message: 'Please confirm your password',
                      }, {
                        validator: this.compareToFirstPassword,
                      }],
                    })(
                      <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label={(
                      <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                          <Icon type="question-circle-o" />
                        </Tooltip>
                      </span>
                    )}>
                    {getFieldDecorator('nickname', {
                      rules: [{ required: true, message: 'Please enter your nickname', whitespace: true }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="Office">
                    {getFieldDecorator('office', {
                      rules: [{ required: true, message: 'Please select your office' }],
                    })(
                      <Select
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Location"
                          optionFilterProp="children"
                          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                          <Option value="langley">Langley</Option>
                          <Option value="coventry">Coventry</Option>
                          <Option value="hongkong">Hong Kong</Option>
                      </Select>)}
                  </FormItem>
                  <FormItem
                    {...formItemLayout}
                    label="Phone Number">
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: 'Please enter your phone number' }],
                    })(
                      <Input type="number" addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                  </FormItem>
                  <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                      valuePropName: 'checked',
                    })(
                      <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                  </FormItem>
                  <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>Register</Button>
                    <a onClick={this.props.onLoginHandler}>Back to Login</a>
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
      onRegister: (email, password) => dispatch(actions.registerUser(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(withErrorHandler(Register, axios)));


