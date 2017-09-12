import React, { Component } from 'react';
import Reply from './Reply';
class ReplyList extends Component {
    constructor(props) {
        super(props);

        this.renderReplies = this.renderReplies.bind(this);
    }
   
    renderReplies() {
        return this.props.replies.map(function(reply, i) {
            return <Reply 
            key={i}
            index={i}
            reply={reply} 
            remove={this.props.removeReply}
            />
        }, this);
    }

    render() {
    return (
        <div>
            {this.renderReplies()}
        </div> 
      );
    }
  }
  
  export default ReplyList;
  