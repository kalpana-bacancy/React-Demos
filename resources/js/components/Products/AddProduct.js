import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddProduct = () => {
  let navigate = useNavigate();
  const BearerToken = useSelector((state) => state.auth.token)
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + BearerToken,
      },
      body: JSON.stringify({
        name: e.target.elements.product_name.value,
        sku: e.target.elements.sku.value,
        price: e.target.elements.price.value,
        quantity: e.target.elements.quantity.value,
      }),
    }
    fetch(
      'http://localhost/laravel-react-js/api/products/create',
      requestOptions,
    )
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
        alert('Product Added Sucessfully!')
        navigate('/products')
      })
      .catch((error) => {
        console.log(error)
        console.error('There was an error!', error)
      })
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
            <div className="col-lg-12 login-title">ADD NEW PRODUCT</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group">
                    <label className="form-control-label">NAME</label>
                    <input
                      type="text"
                      name="product_name"
                      className="form-control"
                      //   onChange={handleChange}
                    />
                    {/* {errors.name && <h3>{errors.name}</h3>} */}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">SKU</label>
                    <input
                      type="text"
                      name="sku"
                      className="form-control"
                      //   onChange={handleChange}
                    />
                    {/* {errors.email && <h3>{errors.email}</h3>} */}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PRICE</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      //   onChange={handleChange}
                    />
                    {/* {errors.password && <h3>{errors.password}</h3>} */}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">QUANTITY</label>
                    <input
                      type="number"
                      name="quantity"
                      className="form-control"
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text"></div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        ADD
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

export default AddProduct
