import React, { Component } from 'react';
import PostList from './Posts/PostList';
import PostDetail from './Posts/PostDetail';
export default class App extends Component {
  render() {
    return (
      <header>
        <div>
           <h1>IT CEO Quiz</h1>
        </div>
        <div>
          <PostDetail />
        </div>
      </header>
    );
  }
}
