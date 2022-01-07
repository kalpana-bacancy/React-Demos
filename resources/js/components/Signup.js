import React, { Fragment, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import useForm from './UseForm'

const Signup = () => {
  const { handleChange, values, errors } = useForm()
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      console.log('Callback function when form is submitted!')
      console.log('Form Values ', values)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.elements.name.value,
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
        }),
      }
      fetch('http://localhost/laravel-react-js/api/register', requestOptions)
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
          }

          console.log(data)
          alert('Registration Done Sucessfully!')
        })
        .catch((error) => {
          console.log(error)
          console.error('There was an error!', error)
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
                      //   onChange={handleChange}
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
