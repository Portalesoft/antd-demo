import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../../containers/Login/Login';
import Register from '../../../containers/Register/Register';
import Logo from '../../../components/Logo/Logo';
import { Layout, Menu } from 'antd';

import backgroundImage from '../../../assets/images/background.png';
import './Landing.css';

const {Header, Content} = Layout;

class Landing extends Component {

    state = {
        login: true
    };

    menuItemSelected = (item, key, keyPath) => {
        this.setState(prevState => {
            return { login: !prevState.login };
        });
    }

    render() {

        let form = <Login />;
        let menu = <Menu.Item key="1" disabled={this.props.isAuthenticating}>REGISTER</Menu.Item>;
        if (!this.state.login) {
            form = <Register />;
            menu = <Menu.Item key="2">LOGIN</Menu.Item>;
        }
        
        return (
            <Layout>
                <Header
                    style={{
                    background: '#fff',
                    padding: 0,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    height: '64px'}}>
                    <Logo />
                    <Menu 
                        style={{float: 'right', lineHeight: '62px'}}
                        theme="light"
                        mode="horizontal"
                        onClick={this.menuItemSelected}>
                        {menu}
                    </Menu>
                </Header>
                <Content
                    style={{
                        minHeight: '100%',
                        width: '100%',
                        height: 'auto',
                        position: 'fixed',
                        top: '64px',
                        left: 0,
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                }}>{form}</Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticating: state.login.authenticating
    };
};

export default connect(mapStateToProps)(Landing);


