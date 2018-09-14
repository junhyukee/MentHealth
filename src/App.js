import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
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
