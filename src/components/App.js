import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
