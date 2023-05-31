import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './slices/products/productsSlice';

const rootReducer = combineReducers({
  products: productsSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
