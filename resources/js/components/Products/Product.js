import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productsActions } from '../../store/products'
import { useNavigate, NavLink } from 'react-router-dom'

const Product = (props) => {
  let navigate = useNavigate()
  const BearerToken = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()
  const deleteProduct = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + BearerToken,
      },
    }
    fetch(
      'http://localhost/laravel-react-js/api/products/delete/' + props.id,
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
        alert('Product Deleted Sucessfully!')
        dispatch(productsActions.removeProducts({ id: props.id }))
        navigate('/products')
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  }
  return (
    <div className="product">
      <div className="image-box">
        <div className="images" id={'image-' + props.id}></div>
      </div>
      <div className="text-box">
        <h2 className="item">{props.name}</h2>
        <h3 className="price">${props.price}</h3>
        <p className="description">A bag of delicious oranges!</p>
        <label htmlFor="item-1-quantity">Quantity:{props.quantity}</label>
        <NavLink
          className="btn btn-outline-primary"
          to={'/update-product/' + props.id}
        >
          Edit
        </NavLink>
        <button
          type="button"
          onClick={deleteProduct}
          className="btn btn-outline-primary"
          name="item-1-button"
          id="item-1-button"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default Product
