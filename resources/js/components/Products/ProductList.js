import React, { Fragment, useState, useEffect } from 'react'
import './ProductsList.css'
import { useSelector, Provider, useDispatch } from 'react-redux'
import Product from './Product'
import { productsActions } from '../../store/products'

const ProductsList = () => {
  const dispatch = useDispatch()
  const BearerToken = useSelector((state) => state.auth.token)
  const [ProductsData, setProductsData] = useState([])
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + BearerToken,
      },
    }
    fetch('http://localhost/laravel-react-js/api/products', requestOptions)
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
          dispatch(productsActions.getProducts(data))
          setProductsData(data)
        }
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  }, [])
  return (
    <Fragment>
      <div className="Products__List">
        <div className="listing-section">
          {ProductsData &&
            ProductsData.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          {!ProductsData && <p>No Data Found!</p>}
        </div>
      </div>
    </Fragment>
  )
}

export default ProductsList
