import React from "react"

function Searchbar(){
return (
<form className="flex flex-col md:flex-row gap-3">
    <div className="flex">
        <input type="text" placeholder="Search products"
			className="w-full px-3 h-10 rounded-l border-2 border-black focus:outline-none focus:border-black"
			/>
        <button type="submit" className="bg-black border-black fill-white text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
</form>
);
}

export default Searchbar;