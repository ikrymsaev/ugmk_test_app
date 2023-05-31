import { productsFilterOptions } from "./constants";

interface IProductEntity {
  id: number;
  factory_id: number;
  date: string | null;
  product1: number | null;
  product2: number | null;
  product3: number | null;
}

type TFilterValue = keyof typeof productsFilterOptions;

interface IProductSliceState {
  productsList: IProductEntity[],
  filter: TFilterValue[],
  isLoading: boolean,
}
interface IProductsDiagramData {
  monthId: number,
  monthLabel: string,
  factory_1: number,
  factory_2: number,
}

type TProductsByMonth = Array<IProductsDiagramData | null>;

export type { TFilterValue, IProductEntity, IProductSliceState, TProductsByMonth }