import React from 'react';
import { Row, Col } from 'antd';
import { Field } from 'redux-form';
import { Input, Select, formItemLayout, tailFormItemLayout } from '../../../../../UI/AntDesign';

const address = (props) => {

    return (
        <Row>
            <Col span={24} md={{ span: 12 }}>
                <Field
                    name="AddressLine1" 
                    component={Input} 
                    formItem={{
                        label: "Address",
                        ...formItemLayout
                    }} />
                <Field
                    name="AddressLine2" 
                    component={Input} 
                    formItem={{
                        ...tailFormItemLayout
                    }} />
                <Field
                    name="AddressLine3" 
                    component={Input} 
                    formItem={{
                        ...tailFormItemLayout
                    }} />
                <Field
                    name="Town" 
                    component={Input} 
                    formItem={{
                        label: "Town / City",
                        ...formItemLayout
                    }} />
                <Field
                    name="County" 
                    component={Input} 
                    formItem={{
                        label: "County / State",
                        ...formItemLayout
                    }} />
                <Field
                    name="Postcode" 
                    component={Input} 
                    formItem={{
                        label: "Zip / Postcode",
                        ...formItemLayout
                    }} />                                                
            </Col>
            <Col span={24} md={{ span: 12 }}>
                <Field
                    name="Country" 
                    component={Select}
                    options={[]} 
                    formItem={{
                        label: "Country",
                        ...formItemLayout
                    }} />
                <Field
                    name="PhoneNumber" 
                    component={Input} 
                    formItem={{
                        label: "Phone Number",
                        ...formItemLayout
                    }} />
                <Field
                    name="Website" 
                    component={Input} 
                    formItem={{
                        label: "Website",
                        ...formItemLayout
                    }} />
            </Col>
        </Row>
    );

}

export default address;