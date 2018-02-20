import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
// import FavePost from '../FavePost/FavePost';

/*
import NewPost from '../../components/NewPost/NewPost';
*/
import './Blog.css';

class Blog extends Component {


    render () {


        return (
            <div>
              <header>
                <nav>
                  <ul>
                    <li><a href="/">All</a></li>
                    <li><a href="/faves">Faves</a></li>
                  </ul>
                </nav>
              </header>
            </div>
        );
    }
}

export default Blog;