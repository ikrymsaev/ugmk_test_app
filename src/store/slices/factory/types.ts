import { IProductEntity } from "../products/types";

interface IFactorySliceState {
  productsList: IProductEntity[],
  isLoading: boolean,
}
type TRequestDetailsParams = { factory_id: string; month: string };
type TFactoryProductsResponse = {
  month_id: number;
  factory_id: number;
  products: IProductEntity[]
}

export type { IFactorySliceState, TRequestDetailsParams, TFactoryProductsResponse };