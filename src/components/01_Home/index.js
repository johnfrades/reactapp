import React, { Component } from 'react';
import axios from 'axios';

import User from './user';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      userApi: "http://localhost:3001/api/user",
      user: []
    }
  }

  componentWillMount(){
    axios.get(this.state.userApi)
    .then(resp => {
      this.setState({
        user: resp.data
      })
    });
  }





  render() {
    if(this.state.user.length === 0){
      return <h2>Loading...</h2>
    } else {
      return (
        <div className="container-fluid">
          <h1>Home!</h1>
          <User users={this.state.user} />
        </div>
      );
    }

  }
}

export default Home;