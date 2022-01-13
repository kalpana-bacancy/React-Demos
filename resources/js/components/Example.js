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
import ProductsList from './Products/ProductList'
import AddProduct from './Products/AddProduct'
import EditProduct from './Products/EditProduct'
import * as constants from '../config/constants'
import { useApi } from '../config/useApi'

function Example() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const BearerToken = useSelector((state) => state.auth.token)
  const onLogoutHandler = (event) => {
    useApi('logout?token=' + BearerToken, 'GET', false, BearerToken).then(
      () => {
        dispatch(authActions.logout())
      },
    )
  }
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
                    <NavLink className="nav-link text-white" to={'/products'}>
                      Products List
                    </NavLink>
                    <NavLink
                      className="nav-link text-white"
                      to={'/add-products'}
                    >
                      Add Products
                    </NavLink>
                  </li>
                  <li className="nav-item login-title">
                    <button onClick={onLogoutHandler}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
      {/* {isAuthenticated && <ProductsList />} */}
      {isAuthenticated && (
        <Routes>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/add-products" element={<AddProduct />} />
          <Route path="/update-product/:productId" element={<EditProduct />} />
        </Routes>
      )}
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
