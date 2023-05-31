import moment from "moment";
import { RootState } from "@/store/reducers";
import { createSelector } from "@reduxjs/toolkit";
import { IProductEntity, IProductSliceState, TFilterValue, TProductsByMonth } from "./types";

const selectProductsSlice = (state: RootState): IProductSliceState => state.products || {};
const selectProducts = createSelector(selectProductsSlice, (slice: IProductSliceState): IProductEntity[] => slice.productsList);
const selectFilter = createSelector(selectProductsSlice, (slice: IProductSliceState): TFilterValue[] => slice.filter);

const selectProductsDiagramData = createSelector(
  [selectProducts, selectFilter],
  (productsList, filter): TProductsByMonth => {
    /** Empty array with index as month order. */
    const productsByMonth: any[] = new Array(12)
      .fill(null)
      .map((_, index) => ({ monthId: index + 1, monthLabel: moment().month(index).format('MMM'), factory_1: 0, factory_2: 0 }));

    const isIncludeAll = filter.includes('all');
    const isIncludeProduct1 = isIncludeAll || filter.includes('product_1');
    const isIncludeProduct2 = isIncludeAll || filter.includes('product_2');
    const isIncludeProduct3 = isIncludeAll || filter.includes('product_3');

    productsList.forEach(({ date, factory_id, product1, product2, product3 }: IProductEntity) => {
      if (date) {
        const monthIndex = Number(date.split('/')[1]) - 1;
        if (isIncludeProduct1 && product1) {
          productsByMonth[monthIndex][`factory_${factory_id}`] += product1;
        }
        if (isIncludeProduct2 && product2) {
          productsByMonth[monthIndex][`factory_${factory_id}`] += product2;
        }
        if (isIncludeProduct3 && product3) {
          productsByMonth[monthIndex][`factory_${factory_id}`] += product3;
        }
      }
    })
    productsByMonth.forEach((item, index) => {
      productsByMonth[index].factory_1 = Number((item.factory_1 / 1000).toFixed(2))
      productsByMonth[index].factory_2 = Number((item.factory_2 / 1000).toFixed(2))
    })
    
    return productsByMonth;
});

export { selectProductsDiagramData, selectFilter };