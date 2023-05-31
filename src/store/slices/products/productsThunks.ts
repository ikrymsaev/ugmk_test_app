import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProductEntity } from "./types";

const requestProducts = createAsyncThunk('products/requestAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<IProductEntity[]>('api/products');
    return data;

  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

export { requestProducts };