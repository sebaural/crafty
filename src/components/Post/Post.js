import React from 'react';

import './Post.css';

const post = (props) => (


<article className="Post" >
    <div className="post_container">
      <div className="post-img">
        <img src={props.url} alt=""/>

        <div className="chooser" onClick={props.addFlip}>
          <div className="chooser-inner">
              <div className='top' onClick={props.postClicked}>
                <i className="far fa-heart"></i>
              </div>
              <div className="bottom" onClick={props.removePost}>
                <i className="fas fa-heart"></i>
              </div>
          </div>
        </div>

        <div className="removeFave">
          <i className="far fa-trash-alt"></i>
        </div>

      </div>
      <div className="title_holder">
        <h2>{props.title}</h2>
      </div>
      <div className="info-holder">
        <div>
          <span>
            <i className="fas fa-user"></i>
          </span>
          <span>
            {props.author}
          </span>
          </div>
        <span> | </span>
          <div>
            <span>
              <i className="far fa-calendar-plus"></i>
            </span>
          <span>
            {props.created}
          </span>
          </div>
        <span> | </span>
          <div>
            <span>
              <i className="fas fa-hand-point-up"></i>
            </span>
            <span>
              {props.ups}
            </span>
          </div>
      </div>
    </div>
  </article>
);

export default post;
