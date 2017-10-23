import React, { Component } from 'react';

import Display from './Display';
import Control from './Controls';

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: 0,
      messages: []
    }
  }

  
  submitMessage = (message) => {
    const data = {...this.state};
    const newMessage = {
      message: message,
      name: this.props.location.state.name,
      date: new Date()
    }
    
    data.messages.push(newMessage);
    this.setState({
      messages: data.messages
    })
  }

  render() {
    if(this.props.location.state){
      return (
        <div>
          <h1>{this.props.location.state.name}</h1>
          <h1>{this.props.location.state.age}</h1>
          <Display messages={this.state.messages} />
          <Control messageSubmit={this.submitMessage} />
        </div>
      );
    }

  }
}

export default Chat;