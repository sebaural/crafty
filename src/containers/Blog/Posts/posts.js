import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';

  class Posts extends Component {

  state = {
    posts: [],
    selectedPosts: []
  };


  componentDidMount() {

    axios.get('/.json')
      .then(response => {
        const mapPosts = response.data.data.children.map(posts => {
            return { ...posts }
          }
        );

        this.setState({posts: mapPosts});
      });
    // send data to parent/Blog
    this.props.callToParen(this.state.selectedPosts);
  };

  selectedFave = (id) => {
    const favesArr = this.state.selectedPosts;
    const faveId = id;
    const inArr = favesArr.indexOf(faveId);
    if (inArr === -1) {
      favesArr.push(faveId);
    }
    this.setState({selectedPosts: favesArr});
  };

  flipClass = (event) => {
     event.currentTarget.classList.toggle("flip");
  };

  render()  {

        const posts = this.state.posts.map(post => {

          let createdTime = post.data.created;
          let postDate = new Date(createdTime).toDateString();

          return (  <Post
            key={post.data.id}
            url={post.data.url}
            title={post.data.title}
            author={post.data.author}
            created={postDate}
            ups={post.data.ups}
            postClicked={() => this.selectedFave(post.data.id)}
            addFlip={(event) => this.flipClass(event)}
          />
          );
        });

    return (
      <section className="Posts all-at-front">
        {posts}
      </section>
    );

  }
}


export default Posts;


