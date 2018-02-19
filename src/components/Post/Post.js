import React from 'react';

import './Post.css';

const post = (props) => (
  <article className="Post" onClick={props.postClicked} >

    <div className="post_container">
      <div className="post-img">
        <img src={props.url} alt=""/>
      </div>
      <div className="title_holder">
        <h2>{props.title}</h2>
      </div>
      <div className="info-holder">
        <span>
          {props.author}
        </span>
        <span>
          {props.created}
        </span>
        <span>
          {props.ups}
        </span>
      </div>
    </div>
  </article>
);

export default post;
