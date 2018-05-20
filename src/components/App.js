import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import User from './routes/User'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/Lei">User Lei</Link>
            </li>
            <li>
              <Link to="/user/Kim">User Kim</Link>
            </li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/user/:username" exact strict component={User} />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
