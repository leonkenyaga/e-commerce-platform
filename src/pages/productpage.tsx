import React from "react";
import Productlist from "../components/productlist";
import Navbar from "../components/Navbar";


function Productpage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Navbar />
      <Productlist />
    </div>
  );
}

export default Productpage;