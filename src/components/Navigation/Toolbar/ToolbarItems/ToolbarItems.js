import React from 'react';
import { Avatar, Badge, Popover, Icon, Card, Divider } from 'antd';
import './ToolbarItems.css';

// Simple implementation of a toolbar for demo purposes,  
// I haven't extracted this out to separate components yet ...
// The antd popover is not great and having to style underlying components
// as the props are not exposed, isn't a good idea either

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const gridStyle = {
    width: '50%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
};

const rowStyle = {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

const actionsContent = (
    <div className="Actions">
        <Card style={{textAlign: 'center'}} title="Quick Actions">
            <Card.Grid style={gridStyle}><Icon type="printer" style={{ fontSize: 32 }} /><span>Generate Report</span></Card.Grid>
            <Card.Grid style={gridStyle}><Icon type="form" style={{ fontSize: 32 }} /><span>Add New Event</span></Card.Grid>
            <Card.Grid style={gridStyle}><Icon type="book" style={{ fontSize: 32 }} /><span>Create New Task</span></Card.Grid>
            <Card.Grid style={gridStyle}><Icon type="schedule" style={{ fontSize: 32 }} /><span>Completed Tasks</span></Card.Grid>
        </Card>
    </div>
  );
  
const alertsContent = (
<div className="Alerts">
    <Card style={{textAlign: 'center'}} title="User Notifications">
        <div style={rowStyle}><div><Icon type="mail" style={{fontSize: 16, margin: '3px 10px 3px 0'}}/><span style={{marginRight: '50px'}}>You have 16 messages</span></div><span>Just now</span></div>
        <Divider style={{margin: '12px 0'}}/>
        <div style={rowStyle}><div><Icon type="user" style={{fontSize: 16, margin: '3px 10px 3px 0'}}/><span style={{marginRight: '50px'}}>12 New users registered</span></div><span>14 mins</span></div>
        <Divider style={{margin: '12px 0'}}/>
        <div style={rowStyle}><div><Icon type="form" style={{fontSize: 16, margin: '3px 10px 3px 0'}}/><span style={{marginRight: '50px'}}>5 New orders received</span></div><span>25 mins</span></div>
        <Divider style={{margin: '12px 0'}}/>
        <p><a href="/">See All Alerts ></a></p>
    </Card>
</div>
);
  
const toolbarItems = (props) => (
    <ul className="ToolbarItems">
        <li><Icon type="search" style={{ fontSize: 22 }} /></li>
        <Popover overlayClassName="AlertsPopover" placement="bottomRight" trigger="click" content={alertsContent}>            
            <li className="move-up"><Badge dot><Icon type="bell" style={{ fontSize: 22 }} /></Badge></li>
        </Popover>            
        <Popover overlayClassName="ActionsPopover" placement="bottomRight" trigger="click" content={actionsContent}>            
            <li><Icon type="appstore-o" style={{ fontSize: 22 }} /></li>
        </Popover>            
        <Popover overlayClassName="MenuPopover" placement="bottomRight" trigger="click" title={text} content={content}>            
            <li className="move-up"><Avatar style={{ backgroundColor: '#87d068' }} icon="user" /></li>
        </Popover>                        
    </ul>
);

export default toolbarItems;