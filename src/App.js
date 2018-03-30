import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from 'react-aux';
import AutoReload from './containers/Utilities/AutoReload/AutoReload';
import Main from './containers/Templates/Main/Main';
import Landing from './containers/Templates/Landing/Landing';
import * as actions from './store/actions';

class App extends Component {

  displayName = App.name;

  componentDidMount () {
    this.props.tryAutoLogin();
  }

  render() {

    let template = <Landing />;
    if (this.props.isAuthenticated) {
      template = <Main />;
    }

    return (
      <Aux>
        <AutoReload title="React Ant Design Demo" application="react-antd-demo" url="/index.html" tryDelay={1 * 10 * 1000} />
        {template}
      </Aux>
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
    tryAutoLogin: () => dispatch(actions.loginCheckStatus())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
