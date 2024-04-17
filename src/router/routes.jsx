import { createBrowserRouter } from "react-router-dom";

import RecipeApp from "../RecipeApp";
import MenuItemDetails from "../pages/MenuItemDetails";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu-item-details/:itemId/:itemName",
    element: <MenuItemDetails />,
  },
]);
