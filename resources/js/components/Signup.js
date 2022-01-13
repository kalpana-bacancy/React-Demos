import React, { Fragment, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import useForm from './UseForm'
import * as constants from '../config/constants'
import { useApi } from '../config/useApi'

const Signup = () => {
  const { handleChange, values, errors } = useForm()
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      const body = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      }
      useApi('register', 'POST', body, false).then((data) => {
        alert('Registration Done Sucessfully!')
      })
    } else {
      alert('There is an Error!')
    }
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">
              CREATE YOUR ACCOUNT NOW!
            </div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group">
                    <label className="form-control-label">FIRST NAME</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      //   onChange={handleChange}
                    />
                    {errors.name && <h3>{errors.name}</h3>}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">EMAIL ADDREESS</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      onChange={handleChange}
                    />
                    {errors.email && <h3>{errors.email}</h3>}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      name="password"
                      onChange={handleChange}
                    />
                    {errors.password && <h3>{errors.password}</h3>}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">
                      CONFIRM PASSWORD
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      className="form-control"
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text"></div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Signup
