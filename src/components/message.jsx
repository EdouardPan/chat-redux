import React, { Component } from 'react';

class Message extends Component {
  render() {
    return(
      <div className='message'>
        <div className='message-info'>
          <span className='message-author'>{this.props.message.author}</span> - <span className='message-date'>{this.props.message.created_at}</span>
        </div>
        <div>{this.props.message.content}</div>
      </div>
    );
  }
}

export default Message;
