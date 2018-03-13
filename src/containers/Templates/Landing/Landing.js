import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../../containers/Login/Login';
import Register from '../../../containers/Register/Register';
import Logo from '../../../components/Logo/Logo';
import { Layout } from 'antd';

import backgroundImage from '../../../assets/images/background.png';
import './Landing.css';

const {Header, Content} = Layout;

class Landing extends Component {

    state = {
        login: true
    };

    toggleState = (item, key, keyPath) => {
        this.setState(prevState => {
            return { login: !prevState.login };
        });
    }

    render() {

        let form = <Login onSignupHandler={this.toggleState}/>;
        if (!this.state.login) {
            form = <Register onLoginHandler={this.toggleState}/>;
        }
        
        return (
            <Layout style={{
                height:'100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover'}}>
                <Header
                    style={{
                    background: '#fff',
                    padding: 0,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    height: '64px',
                    zIndex: '1000'}}>
                    <Logo />
                </Header>
                <Content style={{ overflow: 'auto' }}>{form}</Content>
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


