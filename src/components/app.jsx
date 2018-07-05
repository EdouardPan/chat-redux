import React from 'react';

import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'

const App = () => {
  return (
    <div className="app">
      <div className="left-side">
        <img src="https://secure.meetupstatic.com/photos/event/6/f/6/d/600_456508525.jpeg" alt=""/>
      </div>
      <ChannelList  />
      <MessageList  />
    </div>
  );
};

export default App;
