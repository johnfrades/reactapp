import React, { Component } from 'react';

class Controls extends Component {
  constructor(){
    super();
    this.state = {
      message: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({message: e.target.value})
  }

  submitMessage = (e) => {
    e.preventDefault();
    this.props.messageSubmit(this.state.message);
    this.setState({message: ''});
  }


  render() {
    return (
        <form onSubmit={this.submitMessage}>
          <input type="text" className="form-control" value={this.state.message} onChange={this.handleInputChange} />
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
    );
  }
}

export default Controls;