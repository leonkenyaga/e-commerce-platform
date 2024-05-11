import React from "react"

import ProductOverview from "../components/ProductOverviewExpanded.tsx"
import Products from "../products.tsx"

function Productdescription(){
return(
    <div>
    <ProductOverview />
    <Products tag= "more from this seller" />
    </div>
)
}
export default Productdescription