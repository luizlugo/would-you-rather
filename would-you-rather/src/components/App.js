import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Actions
import {
  handleInitData
} from '../actions/shared';
// Components
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    const {
      dispatch
    } = this.props;
    dispatch(handleInitData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="container-fluid">
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route path="/dashboard" exact component={Dashboard}></Route>
            <Route path="/" exact render={() => {
              return <Redirect to="/dashboard" />
            }}></Route>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(({authedUser}) => {
  return {
    authedUser
  };
})(App);
