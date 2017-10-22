import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  
  constructor(){
    super();
    this.state = {
      name: '',
      password: '',
      errorMessage: ''
    }
    
  }

  login = (e) => {
    e.preventDefault();
    axios.post('/api/login', {
      name: this.state.name,
      password: this.state.password
    })
    .then(res => {
      if(res.data.success){
        console.log('Success boi')
        this.props.history.push(`/home`)
      } else {
        this.setState({
          errorMessage: res.data.message
        })
      }
    })
  }

  render() {
    let myStyle = {
      "color": "red"
    };
    return (
      <div>
        <div className="container">
            <form className="form-inline" onSubmit={this.login}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})} className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="text" value={this.state.password} onChange={e => this.setState({password: e.target.value})} className="form-control" />
              </div>
              <button type="submit" className="btn btn-default">Login</button>
              <h1 style={ myStyle }>{this.state.errorMessage}</h1>
            </form>
          </div>
      </div>
    );
  }
}

export default Login;