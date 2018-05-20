import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import User from './routes/User'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }
  render() {
    const { loggedIn } = this.state
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
          <input
            type="button"
            value={loggedIn ? 'log out' : 'log in'}
            onClick={this.handleLogin}
          />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route
            path="/user/:username"
            exact
            strict
            render={({ match }) =>
              loggedIn ? (
                <User username={match.params.username} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
