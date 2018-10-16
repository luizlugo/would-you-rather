import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Actions
import {
  handleInitData
} from '../actions/shared';
// Components
import Login from './Login';
import Signup from './Signup';
import Main from './Main';

class App extends Component {
  componentDidMount() {
    const {
      dispatch
    } = this.props;
    dispatch(handleInitData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <div className="container-fluid h-100">
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/" render={() => {
                if (authedUser) {
                  return <Main />;
                } else {
                  return <Redirect to="/login" />;
                }
              }}/>
            </Switch>
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
