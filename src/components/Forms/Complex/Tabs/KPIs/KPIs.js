import React, { Component } from 'react';
import Aux from 'react-aux';
import { Button, Divider, Input, Table, Popconfirm } from 'antd';
import KPI from './KPI/KPI';

import './KPIs.css';

const Search = Input.Search;

class KPIs extends Component {
 
    columns = [
        { title: '', width: 50, dataIndex: 'edit', fixed: 'left',
          render: (text, record) => {
              return (
                this.state.dataSource.length > 0 ? (
                    <Button onClick={() => this.onEditKPIHandler(record)} icon="edit" />
                ) : null
              );
          }
        },    
        { title: 'Name', width: 150, dataIndex: 'name', fixed: 'left' },
        { title: 'Description', dataIndex: 'description' },
        { title: 'Frequency', dataIndex: 'frequency' },
        { title: '', width: 50, dataIndex: 'delete', fixed: 'right',
          render: (text, record) => {
              return (
                this.state.dataSource.length > 0 ? (
                    <Popconfirm title="Confirm delete?" onConfirm={() => this.onDelete(record.key)}>
                        <Button type="danger" icon="delete" />
                    </Popconfirm>
                ) : null
              );
          }
        }    
    ];        

    state = {
        dataSource: [{
            key: '1',
            name: 'CSR',
            description: 'Customer Satisfaction and Retention',
            frequency: 'Monthly'
        }, {
            key: '2',
            name: 'Customers',
            description: 'Number of customers gained and lost',
            frequency: 'Quarterly'            
        }, {
            key: '3',
            name: 'Tickets',
            description: 'Number of new support tickets',
            frequency: 'Daily'
        }],
        showKPI: false,
        selectedKPI: null
    };
    
    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    onAddKPIClickHandler = () => {
        this.setState({ showKPI: true });
    }

    onCancelKPIHandler = () => {
        this.setState({ showKPI: false, selectedKPI: null });        
    }

    onEditKPIHandler = (record) => {
        this.setState({ showKPI: true, selectedKPI: record });        
    }

    render () {

        let display = <KPI initialValues={this.state.selectedKPI} cancelled={this.onCancelKPIHandler} />        
        if (!this.state.showKPI) {
            display = 
                <Aux>
                    <div className="Controls">
                        <Button type="primary" icon="plus-circle-o" onClick={this.onAddKPIClickHandler}>Add KPI</Button> 
                        <Search 
                            style={{ width: '200px' }} 
                            placeholder="Search..."                
                            onSearch={value => console.log(value)} />
                    </div>
                    <Divider />  
                    <Table 
                        columns={this.columns} 
                        dataSource={this.state.dataSource}                     
                        scroll={{ x: 1100 }} 
                        size="middle" />     
                </Aux>
        }

        return (
            <div className="KPIs">   
                { display }
            </div>
        );

    }
}

export default KPIs;