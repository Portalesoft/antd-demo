import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email } from 'redux-form-validators'
import { Modal, Upload, Icon, notification } from 'antd';
import { Input, TextArea } from '../../../UI/AntDesign';

import './HelpForm.css';

const Dragger = Upload.Dragger;

class HelpForm extends Component {

    state = {}
    
    closeForm = () => {
        this.props.reset();
        this.props.closed();
    }    

    submit = (values) => {
        console.log('Received values of help form: ', values);
        notification.open({
            message: 'Ticket: ' + (Math.floor(Math.random() * 1000) + 10000),
            description: 'Our support team will contact you as soon as possible. Please quote the ticket number in all correspondence.',
            icon: <Icon type="customer-service" style={{ color: '#2969b0' }} />,
            duration: 0
          });
        this.closeForm();
    }
    
    componentDidUpdate(prevProps, prevState){
        if ( (this.props.visible && !prevProps.visible && this.state.Name !== undefined) ||
             (this.props.visible && prevState.Name === undefined && this.state.Name !== undefined) ) {
            this.state.Name.focus();
        }
    }

    onRegisterControlHandler = (name, control) => {
        this.setState({ [name]: control });
    }

    render () {

        const { handleSubmit } = this.props;   
        return (
            <Modal 
                title="Send us a Message"
                wrapClassName="HelpForm"
                visible={this.props.visible}
                width="400px"
                onOk={handleSubmit(this.submit)}
                okText="Send"
                onCancel={this.closeForm}>
                    <Field 
                        name="Name" 
                        registerControl={this.onRegisterControlHandler}
                        component={Input} 
                        formItem={{
                            label: "Your Name"
                        }} />
                    <Field 
                        name="Email" 
                        component={Input} 
                        validate={[required(), email()]} 
                        formItem={{
                            className: "Mandatory",
                            label: "Email Address"
                        }} />                                        
                    <Field 
                        name="Comments" 
                        component={TextArea} 
                        style={{ marginBottom: '16px' }}
                        validate={[required()]} 
                        autosize={{ minRows: 4, maxRows: 4 }}
                        formItem={{
                            className: "Mandatory",
                            label: "Message"
                        }} />               
                    <Dragger
                        name='file'
                        multiple={true}
                        action='//jsonplaceholder.typicode.com/posts/'>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Click or drag file(s) to this area to upload attachments</p>
                    </Dragger>                         
            </Modal>
        );

    }

}

export default reduxForm({ 
    form: 'help'
})(HelpForm);

