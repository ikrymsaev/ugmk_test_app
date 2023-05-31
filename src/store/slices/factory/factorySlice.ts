import { createSlice } from '@reduxjs/toolkit';
import { requestFactoryProductsByMonth } from './factoryThunks';
import { factorySliceState } from './constants';

const FactorySlice = createSlice({
  name: 'catalog',
  initialState: factorySliceState,
  reducers: {
    clearDetails(state) {
      state.productsList = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(requestFactoryProductsByMonth.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(requestFactoryProductsByMonth.fulfilled, (state, action) => {
      state.productsList = action.payload.products;
      state.isLoading = false;
    });
    builder.addCase(requestFactoryProductsByMonth.rejected, state => {
      state.productsList = [];
      state.isLoading = false;
    });
  },
});
export const { clearDetails } = FactorySlice.actions;

export default FactorySlice.reducer;
