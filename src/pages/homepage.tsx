import React from "react";
import Hero from "../components/Hero.tsx";
import Categories from "../components/categories.tsx";
import Products from "../products.tsx";


function Homepage(){

    return(
        <div>
            <Hero />
           <Categories />
           <Products tag="Customers also purchased"/>
        </div>
      
    );

}

export default Homepage