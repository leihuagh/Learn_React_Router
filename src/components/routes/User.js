import React, { Component } from 'react'

class User extends Component {
  render() {
    const { username } = this.props
    return (
      <div>
        <h1>Welcome {username}</h1>
      </div>
    )
  }
}

export default User
