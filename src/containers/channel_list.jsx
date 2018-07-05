import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, setMessages } from '../actions';

class ChannelList extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.setMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
     this.props.selectChannel(channel);
  }

  renderChannels(channel){
    return (
      <div className={(channel===this.props.selectedChannel) ? " selected" : ""}
        key={channel}
        onClick ={ () => this.handleClick(channel) }
      >#{channel}</div>
    );
  }

  render() {
    return(
      <div className="channel-side">
        <h4>Redux Chat</h4>
        {this.props.channels.map((channel) => this.renderChannels(channel))}
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
  selectedChannel: state.selectedChannel,
  channels: state.channels
 };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
   { selectChannel: selectChannel,
     setMessages : setMessages
   },
   dispatch
 );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
