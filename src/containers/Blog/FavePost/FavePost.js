import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../../components/Post/Post';

import './FavePost.css';

class FavePost extends Component {

  state = {
    favedPosts: []
  };

/*
  findId = (key, value) => {
    return value = "7zkopk";
  };

  traverse = (o) => {
    for (let i in o) {
      if (!!o[i] && typeof(o[i])=="object") {
        console.log(i, o[i])
        traverse(o[i] );
      }
    }
  };
*/

  componentDidMount() {

    axios.get('/.json')
      .then(response => {

          let mapPosts = response.data.data.children.map((posts) => {
              return { ...posts };
            }
          );

          let outputList = [];

          let getFaveListFromParent = this.props.listNameFromParent;

          for (let i = 0; i < getFaveListFromParent.length; i++) {

            outputList.push(mapPosts.filter((x) => {
              return x.data.id === getFaveListFromParent[i];
            }));
          }
          this.setState({favedPosts: outputList});
        }
      );
  };

  render() {


    const Favored = this.state.favedPosts.map((post, i) => {

        let createdTime = post[i]['data'].created;
        let postDate = new Date(createdTime).toDateString();

        return <Post key={post[i]['data'].id}
                     url={post[i]['data'].url}
                     title={post[i]['data'].title}
                     author={post[i]['data'].author}
                     created={postDate}
                     ups={post[i]['data'].ups}/>
    });

    return (
      <section className="Posts favorites">
        {Favored}
      </section>
    );
  }
}

export default FavePost;