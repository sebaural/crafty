import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Posts from './Posts/posts';

/*
// import axios from 'axios';
// import Post from '../../components/Post/Post';
// import FavePost from '../FavePost/FavePost';
import NewPost from '../../components/NewPost/NewPost';
*/
import './Blog.css';
import FavePost from "./FavePost/FavePost";

class Blog extends Component {

  state = {
    favoritePosts: [],
    postsTotal : ''
  };

  populateFavorites = (dataFromPosts) => {
    this.setState({favoritePosts: dataFromPosts});
  };

  sendTotal = (getTotal) => {
    this.setState({postsTotal: getTotal});
  };

  render() {

    console.log(this.state.postsTotal);

    return (
      <div>

        <header>
          <nav>
            <ul>
              <li><span>
                {this.state.postsTotal}
              </span>
                <Link to="/">
                All
              </Link></li>

              <li>
              <span>
                {this.state.favoritePosts.length}
              </span>
                <Link to={{
                  pathname: '/faves',
                  search: '?pageId=2&quick-check=true'
                }}>Faves</Link></li>
            </ul>
          </nav>
        </header>

        <Switch>
            <Route path="/" exact>
            <Posts callToParen={this.populateFavorites} postsTotal={this.sendTotal} />
            </Route>
            <Route path="/faves" exact>
            <FavePost listNameFromParent={this.state.favoritePosts} />
            </Route>
        </Switch>

      </div>
    );
  }
}

export default Blog;
