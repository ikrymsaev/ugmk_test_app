import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requestProducts } from './productsThunks';
import { productsSliceState } from './constants';
import { TFilterValue } from './types';

const ProductSlice = createSlice({
  name: 'catalog',
  initialState: productsSliceState,
  reducers: {
    setProductsFilter(state, { payload }: PayloadAction<TFilterValue[]>) {
      if (state.filter.includes('all')) {
        state.filter = payload.filter((f) => f !== 'all');
        return;
      }
      if (payload.includes('all') || !payload.length) {
        state.filter = ['all'];
        return;
      }
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(requestProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(requestProducts.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(requestProducts.rejected, state => {
      state.productsList = [];
      state.isLoading = false;
    });
  },
});

export const { setProductsFilter } = ProductSlice.actions;

export default ProductSlice.reducer;
