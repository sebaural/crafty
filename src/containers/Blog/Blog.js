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
    listNameFromParent: []
  };

  populateFavorites = (dataFromPosts) => {
    this.setState({favoritePosts: dataFromPosts});
  };

  render() {

    return (
      <div>

        <header>
          <nav>
            <ul>
              <li><Link to="/">
                All
              </Link></li>

              <li>
              <span>
                {this.state.favoritePosts.listNameFromParent}
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
            <Posts callToParen={this.populateFavorites} />
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
