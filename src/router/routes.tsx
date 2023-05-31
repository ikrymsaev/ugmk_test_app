import { FactoryDetails } from "@/pages/FactoryDetails";
import { ProductsPage } from "@/pages/ProductsPage";
import { createBrowserRouter } from "react-router-dom";

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
