import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

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


  render() {

    return (
      <div>

        <header>
          <nav>
            <ul>
              <li><Link to="/">All</Link></li>
              <li><Link to={{
                pathname: '/faves',
                search: '?quick-check=true'
              }}>Faves</Link></li>
            </ul>
          </nav>
        </header>

        <Route path="/" exact component={Posts}/>
        <Route path="/faves" component={FavePost}/>

      </div>
    );
  }
}

export default Blog;
