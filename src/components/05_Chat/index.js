import React, { Component } from 'react';
import axios from 'axios';

import {sendMessage, sendHa} from '../../api';

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      message: ""
    }
  }

  handleInputChange = e => this.setState({message: e.target.value})
  
  submitMessage = (e) => {
    e.preventDefault();

    sendMessage(this.state.message)
    sendHa(this.state.message)
  }

  render() {
    return (
      <div>
        <div style={{overflowY: "scroll", height: "75vh", backgroundColor: "gray", width: "100%"}}>
        </div>
        <form>
          <input type="text" className="form-control" onChange={this.handleInputChange} />
          <button onClick={this.submitMessage} type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}

export default Chat;