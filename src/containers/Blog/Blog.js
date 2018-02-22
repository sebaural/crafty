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
    favoritePosts: []
  };

  populateFavorites = (dataFromPosts) => {
    this.setState({favoritePosts: dataFromPosts});
  };

  render() {

    return (
      <div>

        <header className="header-container">
          <nav>
            <ul className="tabs">
              <li className="active">
                <Link to="/">
                  <span>
                    <i class="fab fa-reddit-alien"></i>
                  </span>
                  /r/analog
                </Link>
              </li>

              <li>
                <Link to={{
                pathname: '/faves',
                search: '?pageId=2&quick-check=true'
                }}>
                  <span>
                    <i class="fas fa-heart"></i>
                  </span>
                  <span>favorites  </span>
                  <span>
                  ({this.state.favoritePosts.length})
                  </span>
                </Link>
              </li>
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
