import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import '../../css/app.css'
import Login from './Login'
import User from './User'

function Example() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to={'/login'}>
            Login
          </NavLink>
          <NavLink className="navbar-brand" to={'/users'}>
            User
          </NavLink>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<User />} />s
        </Routes>
      </main>
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
