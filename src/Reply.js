import React, { Component } from 'react';

class Reply extends Component {
    constructor() {
      super();
      this.replyLikeButton= this.replyLikeButton.bind(this);
      this.replyDislikeButton= this.replyDislikeButton.bind(this);
     
        this.state = {
        like: 0,
        dislike: 0,
        replyLike:'',
        replyDislike:'',
        };
    }
    replyLikeButton() {
        this.setState({
          replyLike: 'blue',
          replyDislike: '',
          like: this.state.like + 1,
        });
      }
      replyDislikeButton() {
        this.setState({
          replyLike: '',
          replyDislike: 'red',
          dislike: this.state.dislike + 1,
        });
      }
    render() {
      return (
        <div>
         {this.props.reply}
         <button onClick={() => {this.props.remove(this.props.index)}}>x</button>
         <button className={this.state.replyLike} onClick={this.replyLikeButton}>{this.state.like} Like</button>
         <button className={this.state.replyDislike} onClick={this.replyDislikeButton}>{this.state.dislike} Dislike</button>  
        </div>
      );
    }
}

export default Reply;