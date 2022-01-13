import React, { Fragment, useState, useEffect } from 'react'
import './ProductsList.css'
import { useSelector, Provider, useDispatch } from 'react-redux'
import Product from './Product'
import { productsActions } from '../../store/products'
import * as constants from '../../config/constants'
import { useApi } from '../../config/useApi'

const ProductsList = () => {
  const dispatch = useDispatch()
  const BearerToken = useSelector((state) => state.auth.token)
  const [ProductsData, setProductsData] = useState([])
  useEffect(() => {
    useApi('products', 'GET', false, BearerToken).then((data) => {
      dispatch(productsActions.getProducts(data))
      setProductsData(data)
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
