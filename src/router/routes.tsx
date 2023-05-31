import { createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "../pages/Products/ProductsPage/ProductsPage";
import { ProductDetailsPage } from "../pages/Products/ProductDetailsPage";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
  },
  {
    path: '/details/:factory_id/:month',
    element: <ProductDetailsPage />,
  },
]);
