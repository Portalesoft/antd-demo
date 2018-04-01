import React, { Component } from 'react';
import Form from '../Form/Form';
import CardContainer from '../../UI/CardContainer/CardContainer';
import { reduxForm, FormSection } from 'redux-form';
import { Tabs } from 'antd';

import Profile from './Tabs/Profile/Profile';
import KPIs from './Tabs/KPIs/KPIs';

const TabPane = Tabs.TabPane;

class Complex extends Component {

    render () {
        return (
            <Form title="Supplier">            
                <CardContainer>
                    <Tabs type="card">
                        <TabPane tab="Profile" key="1">                    
                            <FormSection name="Profile">
                                <Profile />
                            </FormSection>
                        </TabPane>
                        <TabPane tab="KPIs" key="2">
                            <FormSection name="KPIs">
                                <KPIs />
                            </FormSection>
                        </TabPane>
                    </Tabs>
                </CardContainer>
            </Form>
          );
    }
}

export default reduxForm({
    form: 'complex',
    initialValues: {}
})(Complex);