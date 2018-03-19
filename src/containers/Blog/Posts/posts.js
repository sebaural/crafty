import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';

  class Posts extends Component {

    state = {
      posts: [],
      selectedPosts: [],
      countVotes: null
    };

    componentDidMount() {

      axios.get('/.json')
        .then(response => {
          const mapPosts = response.data.data.children.map(posts => {
              return {...posts}
            }
          );

          this.setState({posts: mapPosts});
        });
      // send data to parent/Blog
      this.props.callToParen(this.state.selectedPosts);
      this.props.faveVotesCount(this.state.countVotes);
    };

    selectedFave = (id) => {
      const favesArr = this.state.selectedPosts;
      const faveId = id;
      const inArr = favesArr.indexOf(faveId);

      let voteCount = this.state.countVotes;

      if (inArr === -1) {

        favesArr.push(faveId);
        voteCount = voteCount + 1;
      }
      this.setState({countVotes: voteCount});
      this.setState({selectedPosts: favesArr});
    };

    postRemove = (id) => {
      const favesArr = this.state.selectedPosts;
      const faveId = id;
      const inArr = favesArr.indexOf(faveId);

      let voteCount = this.state.countVotes;

      if (inArr !== -1) {
        favesArr.splice(inArr, 1);
        voteCount = voteCount - 1;
      }
      this.setState({countVotes: voteCount});
      this.setState({selectedPosts: favesArr});
    };

    flipClass = (event) => {
      event.currentTarget.classList.toggle("flip");
    };

    /*
        componentWillReceiveProps (nextProps, thisProps) {
          console.log(nextProps, thisProps);
        }
    */
    render() {

      const posts = this.state.posts.map(post => {

        let createdTime = post.data.created;
        let postDate = new Date(createdTime * 1000).toDateString();

        return (<Post
            key={post.data.id}
            url={post.data.url}
            title={post.data.title}
            author={post.data.author}
            created={postDate}
            ups={post.data.ups}
            postClicked={() => this.selectedFave(post.data.id)}
            addFlip={(event) => this.flipClass(event)}
            removePost={() => this.postRemove(post.data.id)}
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


