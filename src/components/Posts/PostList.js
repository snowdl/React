import React, { Component } from 'react';
import PostData from '../data/posts.json';
import PostDetail from './PostDetail';

export default class PostList extends Component {
  render() {
    return (
      <div>
        <h1>
          {PostData.map((item, index) => {
            return <PostDetail post={item} key={'ItCeoList'} />;
          })}
        </h1>
      </div>
    );
  }
}
