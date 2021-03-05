import React from 'react';

class Signup extends React.Component {
    render(){
        return (
      <div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="firstname" placeholder="First" />
            <input type="text" name="lastname" placeholder="Last" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>)
  }
}

export default Signup