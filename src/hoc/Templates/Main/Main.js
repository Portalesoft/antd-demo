import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import Logo from '../../../components/Logo/Logo';
import Dashboard from '../../../containers/Dashboard/Dashboard';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import * as actions from '../../../store/actions';
import './Main.css';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Main extends Component {

    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    appMenuItemSelected = (item, key, keyPath) => {
        this.props.onLogout();
    }

    render() {

        let brand = 
            <Row type='flex'>
                <Col span={16} style={{paddingTop: '16px'}}>
                    <Logo/>
                </Col>
                <Col span={8}>
                    <Icon style={{color: 'white'}} className='trigger' type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
                </Col>
            </Row>   

        let navigationOne =   
            <Menu.Item key="sub3">
                <Icon type="mail" />
                { this.state.collapsed ? null : 'Navigation One'}
            </Menu.Item>

        if (this.state.collapsed) {
            brand = <Icon style={{color: 'white', paddingLeft: '32px'}} className='trigger' type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
            navigationOne = <SubMenu key="sub3" title={<span><Icon type="mail" /><span>Navigation One</span></span>}></SubMenu>
        }
        return (
            <Layout style={{height:'100vh'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    {brand}
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode='inline'
                        theme='dark'
                        inlineIndent='16'>
                        {navigationOne}
                        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                            <SubMenu key="sub1-2" title="Submenu">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                <Layout>
                    <Header style={{padding: 0}}>
                        <Toolbar title="React Ant Design Demo" />
                    </Header>                            
                    <Content style={{ overflow: 'auto' }}>
                        <Dashboard />
                    </Content>
                </Layout>                
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logoutUser())
    };
};

export default connect(null, mapDispatchToProps)(Main);