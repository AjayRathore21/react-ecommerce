import React from "react";
import Checkout from "./pages/Checkout";

import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import LoginPages from "./pages/LoginPages";
import ProductDetailPage from "./pages/ProductdetailPage";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./features/cart/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <LoginPages />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
