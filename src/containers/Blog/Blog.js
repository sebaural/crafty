import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
/*
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
*/
import './Blog.css';

class Blog extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
    axios.get('https://www.reddit.com/r/analog/top/.json')
      .then(response => {
        const mapPosts = response.data.data.children.map(posts => {
          console.log(posts);
          return { ...posts }
          }
        );

        this.setState({posts: mapPosts});
        console.log(this.state.posts);
      });
  };

    render () {

      const posts = this.state.posts.map(post => {
        return <Post
          key={post.data.id}
          url={post.data.url}
          title={post.data.title}
          author={post.data.author}
          created_utc={post.data.created_utc}
        />
      });

        return (
            <div>
                <section className="Posts">
                  {posts}
                </section>

{/*
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
*/}
            </div>
        );
    }
}

export default Blog;