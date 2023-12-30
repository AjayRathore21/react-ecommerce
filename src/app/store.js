import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product-lists/productListSlice'

export const store = configureStore({
  reducer: {
      product: productReducer,
  },
});
