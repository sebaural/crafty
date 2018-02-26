import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Posts from './Posts/posts';

import './Blog.css';
import FavePost from "./FavePost/FavePost";

class Blog extends Component {

  state = {
    favoritePosts: [],
    votesCount: 0
  };

  populateFavorites = (dataFromPosts) => {
    this.setState({favoritePosts: dataFromPosts});
  };

  toggleActive = (event) => {
    event.currentTarget.classList.toggle("on");
  };
  populateCount = (count) => {
    this.setState({votesCount: count});
  };

  /*
    componentWillReceiveProps (nextProps, nextState) {
    }
  */

  render() {

    return (
      <div>

        <header className="header-container">
          <nav>
            <ul className="tabs" onClick={(event) => this.toggleActive(event)}>
              <li className="first">
                <Link to="/">
                  <span>
                    <i className="fab fa-reddit-alien"></i>
                  </span>
                  /r/analog
                </Link>
              </li>

              <li className="second">
                <Link to={{
                  pathname: '/faves',
                  search: '?pageId=2&quick-check=true'
                }}>
                  <span>
                    <i className="fas fa-heart"></i>
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
            <Posts callToParen={this.populateFavorites} faveVotesCount={this.populateCount}/>
          </Route>
          <Route path="/faves" exact>
            <FavePost listNameFromParent={this.state.favoritePosts}/>
          </Route>
        </Switch>

      </div>
    );
  }
}

export default Blog;
