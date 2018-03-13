import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import Logo from '../../../components/Logo/Logo';
import Dashboard from '../../../containers/Dashboard/Dashboard';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import * as menuItems from '../../../components/Navigation/Menu/menuItems'
import * as actions from '../../../store/actions';
import './Main.css';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Main extends Component {

    state = {
        collapsed: false,
        openKeys: ['dashboards']
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    onClickMenuHandler = ({ item, key, selectedKeys }) => {
        if (key === menuItems.MENU_LOGOUT) {
            this.props.onLogout();
        }
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

        if (this.state.collapsed) {
            brand = <Icon style={{color: 'white', paddingLeft: '32px'}} className='trigger' type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
        }

        return (
            <Layout style={{height:'100vh'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    {brand}
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['dashboards']}
                        mode='inline'
                        theme='dark'
                        inlineIndent='16'>
                            <SubMenu key="dashboards" title={<span><Icon type="line-chart" /><span>Dashboards</span></span>}>
                                <Menu.Item key="1">Support</Menu.Item>
                            </SubMenu>
                            <SubMenu key="order" title={<span><Icon type="book" /><span>Order</span></span>}>
                                <Menu.Item key="11">Confirmation</Menu.Item>
                                <Menu.Item key="12">Production Check</Menu.Item>
                                <Menu.Item key="13">Shipment Request</Menu.Item>
                            </SubMenu>
                            <SubMenu key="packaging" title={<span><Icon type="gift" /><span>Packaging</span></span>}>
                                <Menu.Item key="21">Confirmation</Menu.Item>
                                <Menu.Item key="22">Approval</Menu.Item>
                                <Menu.Item key="23">Documentation</Menu.Item>
                                <SubMenu key="packaging-admin" title="Admin">
                                    <Menu.Item key="231">Carton Matrix</Menu.Item>
                                    <Menu.Item key="232">User Management</Menu.Item>
                                    <Menu.Item key="233">Catalog</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="demo" title={<span><Icon type="info-circle-o" /><span>Demo</span></span>}>
                                <SubMenu key="demo-forms" title="Forms">
                                        <Menu.Item key="233">Work in Progress</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                        </Menu>
                    </Sider>
                <Layout>
                    <Header style={{padding: 0}}>
                        <Toolbar title="React Ant Design Demo" menuHandler={this.onClickMenuHandler}/>
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