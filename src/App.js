import React, { Component } from 'react';
import './App.css';
import CommentInput from './CommentInput.js';

class App extends Component {
  constructor() {
    super();
    this.getComment = this.getComment.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeComment= this.removeComment.bind(this);
    this.state = {
      currentComment: "",
      comments: ['first comment']
    }
  }
  removeComment(i){
    var newComments = this.state.comments.slice();
 
    newComments.splice(i,1);
    this.setState({
      comments: newComments
    });
  }

  getComment(event) {
    var comment = event.target.value;
    this.setState({
      currentComment: comment
    });
  }

  handleClick(event) {
    var commentsArray = this.state.comments.slice();
    commentsArray.push(this.state.currentComment);
    this.setState({
      currentComment: "",
      comments: commentsArray
    });
  }

  render() {
    var commentList = [];
    
    commentList = this.state.comments.map(function(comment, i) {
      return(
        <CommentInput
          key={i}
          comment={comment}
          removeComment={() => this.removeComment(i)}
        />
      );
    }, this);
    
    console.log(commentList);

    return (
      <div className="appRoot">
        <h1>Comment App</h1>
        <section id="getcomments">
          <label htmlFor="comment">Post Your Comment:</label>
          <input type="text" id="comment" name="comment" onChange={this.getComment} value=
            {this.state.currentComment} />
          <button id="addBtn" onClick={this.handleClick}>Add</button>
        </section>
        <section id="showcomments">
          {/* <h2>There are {commentList.length} comment</h2> */}
          {commentList}
        </section>
      </div>
    );
  }
}


/*

<App>
  <Comment>
    {props.comment}
    Like
    Dislike
    Reply
    <ReplyList>
      <Reply />
    </ReplyList>
  </Comment>
</App>


*/
export default App;