import React, { useState, useEffect } from 'react'
import * as constants from './constants'
import { useSelector } from 'react-redux'

export async function useApi(
  endPoint = '',
  method = '',
  body = false,
  BearerToken = false,
) {
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: BearerToken ? 'Bearer ' + BearerToken : '',
    },
  }
  if (body) {
    requestOptions.body = JSON.stringify(body)
  }
  return fetch(constants.REACT_APP_API_URL + endPoint, requestOptions)
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
        return data
      }
    })
    .catch((error) => {
      console.log(error)
      console.error('There was an error!', error)
    })
}
