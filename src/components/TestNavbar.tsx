import React, { useEffect, useState } from "react";

//import { SidebarContext } from "../contexts/SidebarContext";
//import { CartContext } from "../contexts/CartContext";
//import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import Searchbar from "./Searchbar.tsx";
import { cartOpen } from "../State/store.tsx";
import { useSnapshot } from "valtio";
const Header = () => {
  // header state
  const snap = useSnapshot(cartOpen)
  
  const handlecartOpen = (event) => {
    cartOpen.isOpen = true
  }

  const [isActive, setIsActive] = useState(true);
  //const { isOpen, setIsOpen } = useContext(SidebarContext);
  //const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
     window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 sm:px-2 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
          <div className="w-[40px]">
          <img src={Logo} alt="" /> 
          </div>
        {/*Search*/}
        <div>
        <Searchbar />
        </div>
        {/* cart */}
        <div
          onClick={handlecartOpen}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
          0
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
