import React from 'react';
import { Avatar, Badge, Popover, Icon, Card, Divider, Menu } from 'antd';
import * as menuItems from '../../Menu/menuItems';
import './ToolbarItems.css';

// Simple implementation of a toolbar for demo purposes,  
// I haven't extracted this out to separate components yet ...
// The antd popover is not great and having to style underlying components
// as the props are not exposed, isn't a good idea either

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

const profileContent = (props) => {
    return (
    <div className="Profile">
        <Card style={{textAlign: 'center'}} title="My Account">
            <Menu
            mode="inline"
            theme="light"    
            selectable={false}
            onClick={props.menuHandler}
            inlineIndent="0">
                <Menu.Item key="101" style={{textAlign: 'left'}}>
                    <Icon type="profile" />
                    <span>My Profile</span>
                </Menu.Item>
                <Menu.Item key="102" style={{textAlign: 'left'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="Left">
                            <Icon type="schedule" />
                            <span>Activity</span>
                        </div>
                        <div className="Right">
                            <Badge count={12} style={{ backgroundColor: '#7266ba' }} />
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item key="103" style={{textAlign: 'left', width: '200px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="Left">
                            <Icon type="mail" />
                            <span>Messages</span>
                        </div>
                        <div className="Right">
                            <Badge count={23} style={{ backgroundColor: '#5d9cec' }} />
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="104" style={{textAlign: 'left'}}>
                    <Icon type="info-circle-o" />
                    <span>FAQ</span>
                </Menu.Item>
                <Menu.Item key="105" style={{textAlign: 'left'}}>
                    <Icon type="customer-service" />
                    <span>Support</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key={menuItems.MENU_LOGOUT} style={{textAlign: 'left'}}>
                    <Icon type="logout" />
                    <span>Logout</span>
                </Menu.Item>
            </Menu>
        </Card>
    </div>
    );
};
      
const toolbarItems = (props) => (
    <ul className="ToolbarItems">
        <li><Icon type="search" style={{ fontSize: 22 }} /></li>
        <Popover overlayClassName="AlertsPopover" placement="bottomRight" trigger="click" content={alertsContent}>            
            <li className="move-up"><Badge dot><Icon type="bell" style={{ fontSize: 22 }} /></Badge></li>
        </Popover>            
        <Popover overlayClassName="ActionsPopover" placement="bottomRight" trigger="click" content={actionsContent}>            
            <li><Icon type="appstore-o" style={{ fontSize: 22 }} /></li>
        </Popover>            
        <Popover overlayClassName="ProfilePopover" placement="bottomRight" trigger="click" content={profileContent(props)}>            
            <li className="move-up"><Avatar style={{ backgroundColor: '#5d9cec' }} icon="user" /></li>
        </Popover>                        
    </ul>
);

export default toolbarItems;