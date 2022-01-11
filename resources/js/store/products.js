import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
  ProductsData: [],
}

const productsSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    getProducts(state, action) {
      state.ProductsData = action.payload
      console.log(state.ProductsData);
    },
    removeProducts(state, action) {
      state.ProductsData = state.ProductsData.filter(
        (product) => product.id !== action.id,
      )
    },
  },
})
export const productsActions = productsSlice.actions
export default productsSlice.reducer
