import React, { Component } from 'react';
import { Button, Divider, Input, Table } from 'antd';

import './KPIs.css';

const Search = Input.Search;

const columns = [
    { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a href="#">action</a>,
    },
];
  
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
}];
  
class KPIs extends Component {
 
    render () {
        return (
            <div className="KPIs">        
                <div className="Controls">
                    <Button type="primary" icon="plus-circle-o">Add KPI</Button> 
                    <Search 
                        style={{ width: '200px' }} 
                        placeholder="Search..."                
                        onSearch={value => console.log(value)} />
                </div>
                <Divider />  
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    scroll={{ x: 1300 }} 
                    pagination={{ pageSize: 1 }}
                    size="middle" />     
            </div>
        );
    }
}

export default KPIs;