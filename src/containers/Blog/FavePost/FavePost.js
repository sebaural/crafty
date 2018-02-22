import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';

import './FavePost.css';

class FavePost extends Component {

  state = {
    favedPosts: [],
    selectedPosts: []
  };

  componentDidMount() {

    let getFaveListFromParent = this.props.listNameFromParent;
    for (let i = 0; i < getFaveListFromParent.length; i++) {
      console.log(getFaveListFromParent[i]);
    }
    this.setState({selectedPosts: getFaveListFromParent});

    /*
        if (this.props.match.params.id) {
          if (!this.state.favedPosts || (this.state.favedPosts && this.state.favedPosts.id !== this.props.match.params.id)) {
    */
    axios.get('/.json')
      .then(response => {

        const mapPosts = response.data.data.children.map(posts => {
            return {...posts};
          }
        );
        this.setState({favedPosts: mapPosts});
      });

    let favedPostsState = this.state.favedPosts;
    for (let i = 0; i < favedPostsState.length; i++) {

      console.log(favedPostsState[i]);

    }

  };

  render() {

    const Favored = this.state.favedPosts.map(post => {

      let createdTime = post.data.created;
      let postDate = new Date(createdTime).toDateString();

      return <Post key={post.data.id}
                   url={post.data.url}
                   title={post.data.title}
                   author={post.data.author}
                   created={postDate}
                   ups={post.data.ups}/>
    });

    return (
      <section className="Posts favorites">
        {Favored}
      </section>
    );
  }
}

export default FavePost;