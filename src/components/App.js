import React, { Component, Fragment } from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect,
  Prompt
} from 'react-router-dom'

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
              <NavLink to="/user/Mary" activeStyle={{ color: 'green' }}>
                User Mary
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/Ben" activeStyle={{ color: 'green' }}>
                User Ben
              </NavLink>
            </li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={location => {
              return location.pathname.startsWith('/user')
                ? 'Are you sure?'
                : true
            }}
          />
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
              loggedIn ? <User params={match.params} /> : <Redirect to="/" />
            }
          />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
