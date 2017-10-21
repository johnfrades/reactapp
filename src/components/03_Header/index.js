import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
              <div>
                <Link to={`/`}>Home</Link>
                <Link to={`/post`}>Post</Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;