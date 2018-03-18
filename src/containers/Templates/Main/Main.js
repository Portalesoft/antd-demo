import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import SideMenu from '../../../components/Navigation/SideMenu/SideMenu';
import Dashboard from '../../../containers/Dashboard/Dashboard';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import Accordions from '../../../components/Forms/Accordions';
import FieldArrays from '../../../components/Forms/FieldArrays';
import Grids from '../../../components/Forms/Grids';
import SimpleControls from '../../../components/Forms/SimpleControls';
import TabPanels from '../../../components/Forms/TabPanels';
import Validation from '../../../components/Forms/Validation';
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
                        <Switch>
                            <Route path="/accordions" component={Accordions} />
                            <Route path="/fieldarrays" component={FieldArrays} />
                            <Route path="/grids" component={Grids} />
                            <Route path="/simplecontrols" component={SimpleControls} />
                            <Route path="/tabpanels" component={TabPanels} />
                            <Route path="/validation" component={Validation} />
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