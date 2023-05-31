import { createAsyncThunk } from "@reduxjs/toolkit";
import { TFactoryProductsResponse, TRequestDetailsParams } from "./types";
import { apiService } from "../../../services/ApiService";
import { IProductEntity } from "../products/types";
import { clearDetails } from "./factorySlice";

const requestFactoryProductsByMonth = createAsyncThunk(
    'factory/requestDetails',
    async (params: TRequestDetailsParams, thunkAPI
  ) => {
    const { factory_id, month } = params;
    try {
      thunkAPI.dispatch(clearDetails());
      const { data } = await apiService.get<IProductEntity[]>('products', {
        factory_id,
      });
      const result: TFactoryProductsResponse = {
        month_id: Number(month),
        factory_id: Number(params.factory_id),
        products: data.filter((item) => item.date && item.date?.split('/')[1] === month)
      }

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
})

export { requestFactoryProductsByMonth };