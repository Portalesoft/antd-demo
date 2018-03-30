import React from 'react';
import { Row, Col } from 'antd';
import { Field } from 'redux-form';
import { Input, Select, formItemLayout } from '../../../../../UI/AntDesign';

const details = (props) => {

    return (
        <Row>
            <Col span={24} md={{ span: 12 }}>
                <Field
                    name="SupplierType" 
                    component={Select} 
                    options={[]}
                    formItem={{
                        label: "Supplier Type",
                        className: "Mandatory",
                        ...formItemLayout
                    }} />
                <Field
                    name="SupplierName" 
                    component={Input} 
                    formItem={{
                        label: "Supplier Name",
                        className: "Mandatory",
                        ...formItemLayout
                    }} />
                <Field
                    name="SupplierCode" 
                    component={Input} 
                    formItem={{
                        label: "Supplier Code",
                        className: "Mandatory",
                        ...formItemLayout
                    }} />
                <Field
                    name="OrganisationType" 
                    component={Select} 
                    options={[]}
                    formItem={{
                        label: "Organisation Type",
                        ...formItemLayout
                    }} />
                <Field
                    name="AlternativeName" 
                    component={Input} 
                    formItem={{
                        label: "Alternative Name",
                        ...formItemLayout
                    }} />
                <Field
                    name="ParentCompany" 
                    component={Input} 
                    formItem={{
                        label: "Parent Company",
                        ...formItemLayout
                    }} />                                                
            </Col>
            <Col span={24} md={{ span: 12 }}>
                <Field
                    name="CompanyRegNo" 
                    component={Input} 
                    formItem={{
                        label: "Company Reg No",
                        ...formItemLayout
                    }} />
                <Field
                    name="VATNumber" 
                    component={Input} 
                    formItem={{
                        label: "VAT Number",
                        ...formItemLayout
                    }} />
                <Field
                    name="DefaultCurrency" 
                    component={Select}
                    options={[]} 
                    formItem={{
                        label: "Default Currency",
                        ...formItemLayout
                    }} />
                <Field
                    name="CreditTerms" 
                    component={Input} 
                    formItem={{
                        label: "Credit Terms",
                        ...formItemLayout
                    }} />
                <Field
                    name="ProfitLoss" 
                    component={Input} 
                    formItem={{
                        label: "Profit / Loss",
                        ...formItemLayout
                    }} />
                <Field
                    name="Turnover" 
                    component={Input} 
                    formItem={{
                        label: "Turnover",
                        ...formItemLayout
                    }} />
            </Col>
        </Row>
    );

}

export default details;