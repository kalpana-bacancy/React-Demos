import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import '../../css/app.css'
import Login from './Login'
import Signup from './Signup'
import UserProfile from './UserProfile'
import './Login.css'
import { useSelector, Provider, useDispatch } from 'react-redux'
import store from '../store/index'
import { authActions } from '../store/auth'

function Example() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const onLogoutHandler = (event) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    fetch('http://localhost/laravel-react-js/api/logout', requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get('content-type')
          ?.includes('application/json')
        const data = isJson && (await response.json())

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status
          return Promise.reject(error)
        } else {
          dispatch(authActions.logout())
        }
      })
      .catch((error) => {
        console.log(error)
        console.error('There was an error!', error)
      })
  }
  console.log(isAuthenticated)
  return (
    <Fragment>
      {!isAuthenticated && (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item login-title">
                    <NavLink className="nav-link text-white" to={'/login'}>
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item login-title">
                    <NavLink className="nav-link text-white" to={'/sign-up'}>
                      Sign up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
      {isAuthenticated && (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item login-title">
                    <button onClick={onLogoutHandler}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && (
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />
            </Routes>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Example
if (document.getElementById('example')) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename="laravel-react-js">
        <Example />
      </BrowserRouter>
    </Provider>,
    document.getElementById('example'),
  )
}
