import React, { Component } from 'react';
import Post from './Post';

export class Posts extends Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <Post />
      </div>
    );
  }
}

export default Posts;
