import React, { Fragment, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginValidation from './LoginValidation'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import { useApi } from '../config/useApi'

const Login = () => {
  const dispatch = useDispatch()
  const { handleChange, values, errors } = LoginValidation()
  const emailInput = useRef('')
  const passwordInput = useRef('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      const body = {
        email: emailInput.current.value,
        password: passwordInput.current.value,
      }
      useApi('login', 'POST', body, false).then((data) => {
        if (data.token) {
          dispatch(authActions.login(data.token))
        }
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
            <div className="col-lg-12 login-title">LOGIN NOW!</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      ref={emailInput}
                      onChange={handleChange}
                    />
                    {errors.email && <h3>{errors.email}</h3>}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      ref={passwordInput}
                      onChange={handleChange}
                    />
                    {errors.password && <h3>{errors.password}</h3>}
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text"></div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        LOGIN
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

export default Login
