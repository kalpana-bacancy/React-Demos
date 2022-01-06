import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

const Login = () => {
  return (
    <Fragment>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="http://danielzawadzki.com/codepen/01/icon.svg"
              id="icon"
              alt="User Icon"
            />
          </div>
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login

// // DOM element
// if (document.getElementById('login')) {
//   ReactDOM.render(
//     <BrowserRouter basename="/laravel-react-js">
//       <Login />
//     </BrowserRouter>,
//     document.getElementById('login'),
//   )
// }
