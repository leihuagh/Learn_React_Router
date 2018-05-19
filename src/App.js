import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <h1>Home</h1>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
