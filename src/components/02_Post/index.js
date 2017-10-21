import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      password: ''
    }
  }

  submitData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/adduser', {
      name: this.state.name,
      password: this.state.password
    })
    .then(res => {
    })
      
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  updatePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }



  render() {
    return (
        <div className="container">
          <form className="form-inline" onSubmit={this.submitData}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" value={this.state.name} onChange={this.updateName} className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="text" value={this.state.password} onChange={this.updatePassword} className="form-control" />
            </div>
            <button type="submit" className="btn btn-default">Register</button>
          </form>
        </div>
    );
  }
}

export default Post;