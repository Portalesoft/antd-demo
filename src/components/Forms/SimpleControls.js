import React from 'react';
import Form from './Form/Form';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Icon } from 'antd';
import { Input, Select, Checkbox, Cascader, DatePicker, TimePicker, RangePicker, Switch, RadioGroup, TextArea } from '../../components/UI/AntDesign';
import * as normalize from './Utility/Normalize';
import * as format from './Utility/Format';
import * as filter from './Utility/Filter';

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

    const cascadeList = [{ 
        value: 'red', 
        label: 'Red',
        children: [
            { value: 'apple', label: 'Apple' },
            { value: 'dragon', label: 'Dragon' },
            { value: 'ferrari', label: 'Ferrari' }
        ]
      }, {
        value: 'blue',
        label: 'Blue',
        children: [
            { value: 'berry', label: 'Berry' },
            { value: 'moon', label: 'Moon' }
        ]
    }];

    const officeList =   [
        { value: 'langley', text: 'Langley' },
        { value: 'coventry', text: 'Coventry' },
        { value: 'datchet', text: 'Datchet', disabled: true },
        { value: 'hongkong', text: 'Hong Kong' }
    ];

    const fruitList = [
        { value: 'apple', text: 'Apple' },
        { value: 'banana', text: 'Banana' },
        { value: 'mango', text: 'Mango' },
        { value: 'melon', text: 'Melon' },
        { value: 'peach', text: 'Peach' },
        { value: 'pear', text: 'Pear' }
    ];

    const coloursList =   [
        { value: 1, text: 'Red' },
        { value: 2, text: 'Green' },
        { value: 3, text: 'Blue' }
    ];

    const areaCodes = [
        {value: '44', text: '+44'},
        {value: '852', text: '+852'}
    ];

    return (
        <Form title="Simple Form Controls">
            <Row>
                <Col span={24} md={{ span: 12 }}>
                    <Field
                        name="Textbox" 
                        component={Input} 
                        formItem={{
                            label: "Simple textbox",
                            ...formItemLayout
                            }} />
                    <Field
                        name="Alphanumeric" 
                        component={Input} 
                        normalize={normalize.toAlphanumeric} 
                        formItem={{
                            label: "Alphanumeric",
                            ...formItemLayout
                            }} />
                    <Field
                        name="Integer" 
                        component={Input} 
                        style={{ minwidth: '60%' }}
                        normalize={normalize.toInteger} 
                        formItem={{
                            label: "Integer number",
                            ...formItemLayout
                            }} />
                    <Field 
                        name="Decimal" 
                        component={Input} 
                        style={{ width: '60%' }}
                        normalize={normalize.toDecimal(-1)}                        
                        formatOnBlur={format.toDecimal(-1)}                     
                        formItem={{
                            label: "Decimal number",
                            ...formItemLayout
                            }} />
                    <Field 
                        name="Decimal2DP" 
                        component={Input} 
                        style={{ width: '60%' }}
                        normalize={normalize.toDecimal(2)}                        
                        formatOnBlur={format.toDecimal(2)}
                        formItem={{
                            label: "Decimal (2DP)",
                            ...formItemLayout
                            }} />                        
                    <Field 
                        name="Cascader" 
                        component={Cascader} 
                        options={cascadeList}
                        formItem={{
                            label: "Cascader",
                            ...formItemLayout
                            }} />                                                
                    <Field
                        name="Select" 
                        component={Select}
                        style={{ width: '60%' }}
                        options={officeList} 
                        formItem={{
                            label: "Select List",
                            ...formItemLayout
                            }} />                                                
                    <Field                     
                        name="SelectSearch" 
                        component={Select}
                        style={{ width: '60%' }}
                        showSearch
                        optionFilterProp="children"
                        filterOption={filter.likeMatch}
                        options={fruitList} 
                        formItem={{
                            label: "Select Search",
                            ...formItemLayout                                                    
                        }} />                                              
                    <Field 
                        name="MultiSelect" 
                        component={Select} 
                        mode="multiple"
                        options={coloursList} 
                        formItem={{
                            label: "Multi Select",
                            ...formItemLayout
                            }} />                        
                    <Field
                        name="RemoteSelect" 
                        component={Input} 
                        formItem={{
                            label: "Remote Select",
                            ...formItemLayout
                            }} />                        
                    <Field 
                        name="TextArea" 
                        component={TextArea}
                        formItem={{
                            label: "Text Area",
                            ...formItemLayout
                            }} />                        
                </Col>
                <Col span={24} md={{ span: 12 }}>
                    <Field 
                        name="Uppercase" 
                        component={Input} 
                        normalize={normalize.toUpperCase} 
                        formItem={{
                            label: "Uppercase",
                            ...formItemLayout
                            }} />                        
                    <Field 
                        name="Lowercase" 
                        component={Input} 
                        normalize={normalize.toLowerCase}
                        formItem={{
                            label: "Lowercase",
                            ...formItemLayout
                            }} />                        
                    <Field 
                        name="Alphabetic" 
                        component={Input} 
                        normalize={normalize.toAlphabetic}
                        formItem={{
                            label: "Alphabetic",
                            ...formItemLayout
                            }} />                        
                    <Field 
                        name="Date" 
                        component={DatePicker}
                        formItem={{
                            label: "Date",
                            ...formItemLayout
                            }} />                        
                    <Field 
                        name="DateTime" 
                        component={DatePicker} 
                        showTime
                        formItem={{
                            label: "Datetime",
                            ...formItemLayout
                            }} />                        
                    <Field 
                        name="Time" 
                        component={TimePicker}
                        formItem={{
                            label: "Time",
                            ...formItemLayout
                            }} />                        
                    <Field
                        name="Range" 
                        component={RangePicker}
                        formItem={{
                            label: "Range",
                            ...formItemLayout
                            }} />                        
                    <Field
                        name="Combination" 
                        component={Input} 
                        addonBefore={
                            <Field
                                name="CombinationBefore"
                                component={Select}
                                style={{ width: 75 }} 
                                options={areaCodes} />
                        }
                        addonAfter={<Icon type="setting" />}                        
                        formItem={{
                            label: "Combination",
                            ...formItemLayout                                                    
                        }} />
                    <Field 
                        name="Checkbox" 
                        component={Checkbox} 
                        content={<span>Click me to toggle value</span>} 
                        formItem={{
                            label: "Checkbox",
                            ...formItemLayout
                            }} />     
                    <Field 
                        name="Radio" 
                        component={RadioGroup}
                        radios={coloursList}
                        formItem={{
                            label: "Radio Group",
                            ...formItemLayout
                            }} />                        
                    <Field 
                        name="Switch" 
                        component={Switch} 
                        formItem={{
                            label: "Switch",
                            ...formItemLayout
                            }} />                        
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