import React, { Component } from 'react'

class User extends Component {
  render() {
    const { params } = this.props
    return (
      <div>
        <h1>Welcome {params.username}</h1>
      </div>
    )
  }
}

export default User
