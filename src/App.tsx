import React from "react";
import Header from "./components/TestNavbar.tsx";
import Homepage from "./pages/homepage.tsx";
import Cart from "./components/Cart.tsx";
import Products from "./products.tsx";
import Productdescription from "./pages/productdescription.tsx";
import {
  Outlet,
  ReactLocation,
  Router
} from "@tanstack/react-location";

const location = new ReactLocation();

const routes = [
  {
    path: "/",
    element: (
      <>
        <Homepage />
      </>
    ),
  },
  {
    path:"/discover-more",
    element: <Products />,
  },
  {
    path: "/product-description/:id",
    element: <Productdescription />,
  },
];

function App() {
  return (
    <div>
      <Router location ={location} routes={routes}>
      <Header />
      <div>
        <Outlet />
      </div>
      <Cart />
      </Router>
    </div>
  );
}

export default App;
