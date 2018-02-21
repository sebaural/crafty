import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';

import './FavePost.css';

class FavePost extends Component {

  state = {
    favedPosts: [],
    selectedPost: null
  };

  componentDidMount() {

    /*
        if (this.props.match.params.id) {
          if (!this.state.favedPosts || (this.state.favedPosts && this.state.favedPosts.id !== this.props.match.params.id)) {
    */
        axios.get('/.json')
          .then(response => {
            const mapPosts = response.data.data.children.map(posts => {
                return { ...posts }
              }
            );

            this.setState({favedPosts: mapPosts});
          });
/*
      }
    }
*/

    console.log(this.props.listNameFromParent);

  };

  render () {


    const Favored = this.state.favedPosts.map(post => {

      let createdTime = post.data.created;
      let postDate = new Date(createdTime).toDateString();

      return <Post key={post.data.id}
        url={post.data.url}
        title={post.data.title}
        author={post.data.author}
        created={postDate}
        ups={post.data.ups}
      />
    });

    return (
      <div>
        <h2>Fave Posts</h2>

        <section className="Posts">
          {Favored}
        </section>

      </div>
    );
  }
}

export default FavePost;