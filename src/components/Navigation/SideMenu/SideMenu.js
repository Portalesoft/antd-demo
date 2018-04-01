import React from 'react';
import { Row, Col, Icon, Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo';

const sideMenu = (props) => {

    const { SubMenu } = Menu;
    const { Sider } = Layout;
    const { collapsed, toggleHandler } = props;
    
    let brand = 
        <Row type='flex'>
            <Col span={16} style={{paddingTop: '16px'}}>
                <Logo/>
            </Col>
            <Col span={8}>
                <Icon 
                    style={{color: 'white'}} 
                    className='trigger' 
                    type={collapsed ? 'menu-unfold' : 'menu-fold'} 
                    onClick={toggleHandler}/>
            </Col>
        </Row>   

    if (collapsed) {
        brand = 
            <Icon 
                style={{color: 'white', paddingLeft: '32px'}} 
                className='trigger' 
                type={collapsed ? 'menu-unfold' : 'menu-fold'} 
                onClick={toggleHandler}/>
    }

    return (        
        <Sider trigger={null} collapsible collapsed={collapsed}>
            {brand}
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['dashboards']}
                mode='inline'
                theme='dark'
                inlineIndent='16'>
                    <SubMenu key="dashboards" title={<span><Icon type="line-chart" /><span>Dashboards</span></span>}>
                        <Menu.Item key="1"><NavLink to='/'>Support</NavLink></Menu.Item>
                    </SubMenu>
                    <SubMenu key="forms" title={<span><Icon type="form" /><span>Forms</span></span>}>
                        <Menu.Item key="11"><NavLink to='/simplecontrols'>Simple Controls</NavLink></Menu.Item>
                        <Menu.Item key="12"><NavLink to='/validation'>Validation</NavLink></Menu.Item>
                        <Menu.Item key="13"><NavLink to='/complex'>Complex</NavLink></Menu.Item>
                    </SubMenu>
            </Menu>
        </Sider>
    );

}

export default sideMenu;
