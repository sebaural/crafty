import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
// import FavePost from '../FavePost/FavePost';

/*
import NewPost from '../../components/NewPost/NewPost';
*/
import './Blog.css';

class Blog extends Component {

  state = {
    posts: [],
    favedPosts: []
  };

  componentDidMount() {
    /*axios.get('https://www.reddit.com/r/analog/top/.json')*/
    axios.get('/.json')
      .then(response => {
        const mapPosts = response.data.data.children.map(posts => {
          return { ...posts }
          }
        );

        this.setState({posts: mapPosts});
      });
  };

    selectedFave = (id) => {
      const favesArr = this.state.favedPosts;
      const faveId = id.toString();
     // console.log(faveId);
      if (faveId in favesArr === false) {
        favesArr.push(faveId);
        this.setState({favedPosts: favesArr});
      }

      console.log(this.state.favedPosts);
    };

    render () {

      const posts = this.state.posts.map(post => {

        let createdTime = post.data.created;
        let postDate = new Date(createdTime).toDateString();

        return <Post
          key={post.data.id}
          url={post.data.url}
          title={post.data.title}
          author={post.data.author}
          created={postDate}
          ups={post.data.ups}
          postClicked={() => this.selectedFave(post.data.id)}
        />
      });

        return (
            <div>
                <section className="Posts">
                  {posts}
                </section>
{/*
              <section>
                <FavePost />
              </section>
*/}
            </div>
        );
    }
}

export default Blog;