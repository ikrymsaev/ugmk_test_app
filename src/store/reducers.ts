import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './slices/products/productsSlice';
import factorySlice from './slices/factory/factorySlice';

const rootReducer = combineReducers({
  products: productsSlice,
  factory: factorySlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
