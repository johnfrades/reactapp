import React from 'react';

const User = (props) => {
    return(
      <div className="container-fluid">
        {props.users.map(user => 
          <div key={user._id}>
            <h1>{user.name}</h1>
          </div> 
        )}
      </div>
    );
};


export default User;