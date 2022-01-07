import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import '../../css/app.css'
import Login from './Login'
import Signup from './Signup'
import './Login.css'

function Example() {
  return (
    <Fragment>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  )
}

export default Example
if (document.getElementById('example')) {
  ReactDOM.render(
    <BrowserRouter basename="laravel-react-js">
      <Example />
    </BrowserRouter>,
    document.getElementById('example'),
  )
}
