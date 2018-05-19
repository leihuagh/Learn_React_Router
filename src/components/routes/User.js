import React, { Component } from 'react'

class User extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <h1>Welcome {match.params.username}</h1>
      </div>
    )
  }
}

export default User
