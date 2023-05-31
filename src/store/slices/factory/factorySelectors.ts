import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../reducers";
import { IFactorySliceState } from "./types";

const selectFactorySlice = (state: RootState): IFactorySliceState => state.factory || {};

const selectFactoryDetails = createSelector(
  selectFactorySlice,
  ({ productsList }): any => {
    const result = productsList.reduce((acc, current) => {
      if (current.product1) {
        acc.product1.value += current.product1;
      }
      if (current.product2) {
        acc.product2.value += current.product2;
      }
      if (current.product3) {
        acc.product3.value += current.product3;
      }
      return acc;
    }, { product1: { name: 'Продукт 1', value: 0 }, product2: { name: 'Продукт 2', value: 0 }, product3: { name: 'Продукт 3', value: 0 } })
    
    return Object.values(result);
});

export { selectFactoryDetails };