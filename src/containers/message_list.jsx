import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {

componentWillMount() {
  this.setMessages();
}

componentDidMount() {
  this.refresher = setInterval(this.setMessages, 1000000);
}

setMessages = () => {
  this.props.setMessages(this.props.selectedChannel)
}

componentWillUnmount() {
  clearInterval(this.refresher);
}

componentDidUpdate() {
  this.boxMessages.scrollTop = this.boxMessages.scrollHeight;
}

  render() {
    return(
      <div className="channel-container">
        <div className="channel-title">
          <h4>Channel #{this.props.selectedChannel}</h4>
        </div>
        <div className='channel-content' ref={(boxMessages) => {this.boxMessages = boxMessages}}>
          {
            this.props.messages.map((message) => {
              return <Message message={message} key={message.created_at}/>
            })
          }
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
  messages: state.messages,
  selectedChannel: state.selectedChannel
 };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setMessages: setMessages },
 dispatch
 );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
