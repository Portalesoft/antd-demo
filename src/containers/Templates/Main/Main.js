import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import SideMenu from '../../../components/Navigation/SideMenu/SideMenu';
import Dashboard from '../../../containers/Dashboard/Dashboard';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SimpleControls from '../../../components/Forms/SimpleControls';
import Validation from '../../../components/Forms/Validation';
import Complex from '../../../components/Forms/Complex/Complex';
import HelpButton from '../../../components/UI/Support/HelpButton/HelpButton';

import * as menuIds from '../../../components/Navigation/menuids';
import * as actions from '../../../store/actions';

import './Main.css';

const { Header, Content } = Layout;

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
        if (key === menuIds.MENU_LOGOUT) {
            this.props.onLogout();
            this.props.history.push('/');
        }
    }
    
    render() {
              
        return (
            <Layout style={{ height:'100vh' }}>
                <SideMenu collapsed={this.state.collapsed} toggleHandler={this.toggle} />
                <Layout>
                    <Header style={{ padding: 0 }}>
                        <Toolbar title="React Ant Design Demo" menuHandler={this.onClickMenuHandler}/>
                    </Header>                            
                    <Content style={{ overflow: 'auto' }}>
                        <HelpButton />
                        <Switch>
                            <Route path="/simplecontrols" component={SimpleControls} />
                            <Route path="/validation" component={Validation} />
                            <Route path="/complex" component={Complex} />
                            <Route path="/" exact component={Dashboard} />
                            <Redirect to="/" />
                        </Switch>                        
                    </Content>
                </Layout>                
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.login.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logoutUser())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));