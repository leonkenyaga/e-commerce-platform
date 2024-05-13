import React from "react";
import Header from "./components/TestNavbar.tsx";
import Homepage from "./pages/homepage.tsx";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    path: "/product-description/:name-:id",
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
      </Router>
    </div>
  );
}

export default App;
