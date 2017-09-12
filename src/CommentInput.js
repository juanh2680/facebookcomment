import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerComment from './InnerComment';
class CommentInput extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.showNewCommment = this.showNewCommment.bind(this);
    // default status for a contact
    this.state = {
      likes: 0,
      dislikes: 0,
      dislikeClass: '',
      likeClass: '',
      innerComment: 'innerComment',
      smallComment: '',
      insideComment:[]
      
    };
  }

  removeComment(i) {
    var newComments = this.state.insideComment.slice(); 
    newComments.splice(i, 1);
    this.setState({
      insideComment: newComments
    });
  }

  getComment(event) {
    var comment = event.target.value;
    this.setState({
      innerComment: comment
    });
  }

  handleClickInside(event) {
    var commentsArray = this.state.insideComment.slice();
    commentsArray.push(this.state.smallComment);
    this.setState({
      smallComment: "",
      innerComment: commentsArray
    });
  }

  handleClick() {
    this.setState({
      likeClass: 'blue',
      dislikeClass: '',
      likes: this.state.likes + 1,
    });
  }

  handleClick2() {
    this.setState({
      dislikeClass: 'red',
      likeClass: '',
      dislikes: this.state.dislikes + 1,
    });
  }

  showNewCommment() {
    this.setState({
      innerComment: '',
    });
  }

  render() {
    return (
      <div>
        <p>
          {this.props.comment}
          <button onClick={this.props.removeComment}>x</button>
          <button className={this.state.likeClass} onClick={this.handleClick}> {this.state.likes}Like</button>
          <button className={this.state.dislikeClass} onClick={this.handleClick2}> {this.state.dislikes} Dislike</button>
          <button onClick={this.showNewCommment}>Comment</button>
          <InnerComment
            innerComment={this.state.innerComment}
          />
        </p>
      </div>
    );
  }
}
export default CommentInput;
