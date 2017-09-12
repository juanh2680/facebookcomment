import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import ReplyList from './ReplyList'
import App from './App';

class InnerComment extends Component {
    constructor() {
      super();
        this.state = {
            currentSmallInside: "",
            replies: []
        }
        
        this.removeCommentSmall =this.removeCommentSmall.bind(this);
        this.getCommentSmall= this.getCommentSmall.bind(this);
        this.handleClickSmall= this.handleClickSmall.bind(this);
        this.removeReply= this.removeReply.bind(this);
        
    }

    removeCommentSmall(i){
        var newCommentsInside = this.state.smallInsideComment.slice();
        newCommentsInside.splice(i,1);
        this.setState({
          smallInsideComment: newCommentsInside
        });
      }
    
    removeReply(i) {
        console.log(i);
        const removeReply = this.state.replies;
        removeReply.splice(i,1);
        this.setState({
            replies: removeReply
        });
        //remove the selected index 
        // from state.replies
    }
    
    getCommentSmall(event) {
        var commentsmallInside = event.target.value;
        this.setState({
            currentSmallInside: commentsmallInside
        });
    }
    
    handleClickSmall(event) {
        var replies = this.state.replies;
        replies.push(this.state.currentSmallInside);
        console.log(replies, 'array');
        this.setState({
            currentSmallInside: "",
            replies: replies
        });
    }
     
    render() {
  
    return (
        <div className={this.props.innerComment}>
            <input type="text" id="comment" name="comment" onChange={this.getCommentSmall} value={this.state.currentSmallInside}/>
            <button  onClick={this.handleClickSmall}>Submit</button>
            <ReplyList
                replies={this.state.replies}
                removeReply={this.removeReply}
            />
        </div>
    );
    }
}

export default InnerComment;