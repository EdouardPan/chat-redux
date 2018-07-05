// TODO: add and export your own actions

export function setMessages(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then(data => {
      return{
        type: 'SET_MESSAGES',
        payload: data["messages"]
      };
    });
}

export function createMessage(channel, author, content) {
  // Send the message through API
  const body = { "author": author, "content": content };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'MESSAGE_POSTED',
    payload: promise
  };
}

export function selectChannel(channel){
  return{
    type: 'SELECT_CHANNEL',
    payload: channel
  }
}
