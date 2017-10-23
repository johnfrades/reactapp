import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
        <div style={{overflowY: "scroll", height: "75vh", backgroundColor: "white", width: "100%", padding: '2%'}}>
          {this.props.messages.map(d => 
          {return <p key={d.date}>
                  <strong>{d.name}</strong>: {d.message}
                 </p>
            })}
        </div>
    );
  }
}

export default Display;