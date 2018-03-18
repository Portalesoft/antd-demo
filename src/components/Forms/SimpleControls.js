import React from 'react';
import Form from './Form/Form';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'antd';
import { Input, Select, Checkbox, DatePicker } from '../../components/UI/AntDesign';
import * as normalize from './Utility/Normalize';
import * as format from './Utility/Format';

const simpleControls = (props) => {

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

    const officeList =   [
        { value: 'langley', text: 'Langley' },
        { value: 'coventry', text: 'Coventry' },
        { value: 'datchet', text: 'Datchet', disabled: true },
        { value: 'hongkong', text: 'Hong Kong' }
    ];

    return (
        <Form title="Simple Form Controls">
            <Row gutter={0} style={{ marginBottom: 0 }}>
                <Col span={24} md={{ span: 12 }}>
                    <Field {...formItemLayout}
                        name="Textbox" 
                        label="Simple textbox"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Alphanumeric" 
                        label="Alphanumeric"
                        component={Input} 
                        normalize={normalize.toAlphanumeric} />
                    <Field {...formItemLayout}
                        name="Integer" 
                        label="Integer number"
                        component={Input} 
                        style={{ minwidth: '60%' }}
                        normalize={normalize.toInteger} />
                    <Field {...formItemLayout}
                        name="Decimal" 
                        label="Decimal number"
                        component={Input} 
                        style={{ width: '60%' }}
                        normalize={normalize.toDecimal(-1)}                        
                        formatOnBlur={format.toDecimal(-1)} />                       
                    <Field {...formItemLayout}
                        name="Decimal2DP" 
                        label="Decimal (2DP)"
                        component={Input} 
                        style={{ width: '60%' }}
                        normalize={normalize.toDecimal(2)}                        
                        formatOnBlur={format.toDecimal(2)} />                       
                    <Field {...formItemLayout}
                        name="Icon" 
                        label="Icon &amp; Placeholder"
                        icon="mail"
                        placeholder="Email Address"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Cascade" 
                        label="Cascade"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Select" 
                        label="Select List"
                        component={Select}
                        options={officeList} />
                    <Field {...formItemLayout}
                        name="SelectSearch" 
                        label="Select Search"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="RemoteSelect" 
                        label="Remote Select"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Checkbox" 
                        label="Checkbox"
                        component={Checkbox} 
                        content={<span>Click me to toggle value</span>} />
                    <Field {...formItemLayout}
                        name="FixedTextArea" 
                        label="Fixed Text Area"
                        component={Input} />                                                                   
                </Col>
                <Col span={24} md={{ span: 12 }}>
                    <Field {...formItemLayout}
                        name="Uppercase" 
                        label="Uppercase"
                        component={Input} 
                        normalize={normalize.toUpperCase} />
                    <Field {...formItemLayout}
                        name="Lowercase" 
                        label="Lowercase"
                        component={Input} 
                        normalize={normalize.toLowerCase} />
                    <Field {...formItemLayout}
                        name="Alphabetic" 
                        label="Alphabetic"
                        component={Input} 
                        normalize={normalize.toAlphabetic} />
                    <Field {...formItemLayout}
                        name="Date" 
                        label="Date"
                        component={DatePicker} />
                    <Field {...formItemLayout}
                        name="DateTime" 
                        label="Datetime"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Time" 
                        label="Time"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Range" 
                        label="Range"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Combination" 
                        label="Combination"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="SelectTags" 
                        label="Select Tags"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Switch" 
                        label="Switch"
                        component={Input} />
                    <Field {...formItemLayout}
                        name="Radio" 
                        label="Radio"
                        component={Input} />                        
                    <Field {...formItemLayout}
                        name="DynamicTextArea" 
                        label="Dynamic Text Area"
                        component={Input} />     
                </Col>
            </Row>            
        </Form>
    );

}

export default reduxForm({
    form: 'simpleControls',
    initialValues: {},
    enableReinitialize: true
})(simpleControls);