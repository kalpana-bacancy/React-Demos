import React, { Fragment, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as constants from '../../config/constants'
import { useApi } from '../../config/useApi'

const EditProduct = (props) => {
  const navigate = useNavigate()
  const params = useParams()
  const BearerToken = useSelector((state) => state.auth.token)
  let InitialProductsData = {
    id: '',
    name: '',
    sku: '',
    price: '',
    quantity: '',
  }
  const [ProductsData, setProductsData] = useState(InitialProductsData)

  useEffect(() => {
    useApi('products/show/' + params.productId, 'GET', false, BearerToken).then(
      (data) => {
        setProductsData(data.data)
      },
    )
  }, [])
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const body = {
      name: e.target.elements.product_name.value,
      sku: e.target.elements.sku.value,
      price: e.target.elements.price.value,
      quantity: e.target.elements.quantity.value,
    }
    useApi(
      'products/update/' + params.productId,
      'PUT',
      body,
      BearerToken,
    ).then((data) => {
      alert('Product Update Sucessfully!')
      navigate('/products')
    })
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProductsData({
      ...ProductsData,
      [name]: value,
    })
  }
  return (
    <Fragment>
      {ProductsData && (
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
              <div className="col-lg-12 login-key">
                <i className="fa fa-key" aria-hidden="true"></i>
              </div>
              <div className="col-lg-12 login-title">UPDATE PRODUCT</div>
              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                      <label className="form-control-label">NAME</label>
                      <input
                        type="text"
                        name="product_name"
                        className="form-control"
                        defaultValue={ProductsData.name}
                        onChange={handleInputChange}
                      />
                      {/* {errors.name && <h3>{errors.name}</h3>} */}
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">SKU</label>
                      <input
                        type="text"
                        name="sku"
                        className="form-control"
                        defaultValue={ProductsData.sku}
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
                        defaultValue={ProductsData.price}
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
                        defaultValue={ProductsData.quantity}
                      />
                    </div>

                    <div className="col-lg-12 loginbttm">
                      <div className="col-lg-6 login-btm login-text"></div>
                      <div className="col-lg-6 login-btm login-button">
                        <button
                          type="submit"
                          className="btn btn-outline-primary"
                        >
                          Update
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
      )}
    </Fragment>
  )
}

export default EditProduct
