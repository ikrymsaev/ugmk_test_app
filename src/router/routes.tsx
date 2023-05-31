import { createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "../pages/Products/ProductsPage/ProductsPage";
import { FactoryDetails } from "../pages/Products/FactoryDetails/FactoryDetails";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
  },
  {
    path: '/details/:factory_id/:month',
    element: <FactoryDetails />,
  },
]);
