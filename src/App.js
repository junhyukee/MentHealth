import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registeringUser: false,
    loggingInUser: false,
    fetchingPosts: false,
    loggingOutUser: false,
    posts: [],
    error: null
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(App)
);
