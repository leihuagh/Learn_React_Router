import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

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
              <NavLink to="/" activeStyle={{ color: 'green' }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ color: 'green' }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/Lei" activeStyle={{ color: 'green' }}>
                User Lei
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/Kim" activeStyle={{ color: 'green' }}>
                User Kim
              </NavLink>
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
