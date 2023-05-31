import { IProductSliceState } from "./types";

const productsFilterOptions = {
  ['all']: { key: 'all', label: 'Все', value: 'all' },
  ['product_1']: { key: 'product_1', label: 'Продукт 1', value: 1 },
  ['product_2']: { key: 'product_2', label: 'Продукт 2', value: 2 },
  ['product_3']: { key: 'product_3', label: 'Продукт 3', value: 3 },
} as  const;

const productsSliceState: IProductSliceState = {
  productsList: [],
  filter: ['all'],
  isLoading: false,
};

export { productsSliceState, productsFilterOptions };