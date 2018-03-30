import React from 'react';
import { Row, Col, Divider, Button } from 'antd';
import { Field } from 'redux-form';
import { Input, Select, DatePicker, noLabelFormItemLayout } from '../../../../../../UI/AntDesign';

import './Contacts.css';

const departments = [
    {value: 'accessories', text: 'Accessories'},
    {value: 'clothing', text: 'Clothing'}
];

const contacts = (props) => {

    const { fields } = props;
    return (
        <div className="Contacts">
            <Button type="primary" icon="plus-circle-o" onClick={() => fields.push({})}>Add Contact</Button> 
            <Divider />       
            {fields.map((member, index) => (
                <div key={index} className="Contact">
                    <Row>
                        <Col span={24} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }}>
                            <Field
                                name={`${member}.Name`}
                                component={Input} 
                                placeholder="Name"
                                formItem={{
                                    ...noLabelFormItemLayout
                                }} />
                        </Col>
                        <Col span={24} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }}>
                            <Field
                                name={`${member}.Position`}
                                component={Input} 
                                placeholder="Position"
                                formItem={{
                                    ...noLabelFormItemLayout
                                }} />
                        </Col>
                        <Col span={24} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }}>
                            <Field
                                name={`${member}.Department`}
                                component={Select}
                                options={departments} 
                                placeholder="Department"
                                formItem={{
                                    ...noLabelFormItemLayout
                                }} />
                        </Col>
                        <Col span={24} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }}>
                            <Field
                                name={`${member}.LastContact`}
                                component={DatePicker} 
                                placeholder="Last Contact"
                                formItem={{
                                    ...noLabelFormItemLayout
                                }} />
                        </Col>
                        <Col span={24} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }}>
                            <Field
                                name={`${member}.PhoneNumber`}
                                component={Input} 
                                placeholder="Phone"
                                formItem={{
                                    ...noLabelFormItemLayout
                                }} />
                        </Col>
                        <Col span={24} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Field
                                    name={`${member}.Email`}
                                    component={Input} 
                                    placeholder="Email"
                                    formItem={{
                                        ...noLabelFormItemLayout
                                    }} />
                                <Button 
                                    onClick={() => fields.remove(index)} 
                                    style={{ marginRight: '8px', marginTop: '4px' }}
                                    type="danger"
                                    icon="delete" />
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );

}

export default contacts;