import React from 'react';
import { FormSection, FieldArray } from 'redux-form';
import { Collapse } from 'antd';

import Details from './Panels/Details';
import Address from './Panels/Address';
import Contacts from './Panels/Contacts/Contacts';

const Panel = Collapse.Panel;

const profile = (props) => (
        <Collapse defaultActiveKey={['1']} accordion>
            <Panel header="Details" key="1" showArrow={false}>
                <FormSection name="Details">
                    <Details />
                </FormSection>
            </Panel>
            <Panel header="Address" key="2" showArrow={false}>
                <FormSection name="Address">
                    <Address />
                </FormSection>
            </Panel>
            <Panel header="Contacts" key="3" showArrow={false}>
                <FieldArray name="Contacts" component={Contacts} />
            </Panel>
        </Collapse>
);

export default profile;