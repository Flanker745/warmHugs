import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logo from "./../assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

function Header({ setSearchQuery }) { // Accept setSearchQuery as a prop
  const { getCartCount } = useCart(); // Use the cart context
  const [searchInput, setSearchInput] = useState(""); // Define searchInput state
  const [scrolled, setScrolled] = useState(false);
  const [showNev, setNev] = useState(false);
  
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value); // Update local state
    setSearchQuery(value); // Update the search query in parent
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${scrolled ? "" : "fixed "} duration-300 z-[9999] w-full`}>
        <div className="bg-black py-4 text-[9px] sm:text-[16px] w-full text-white flex flex-wrap">
          <div className="flex flex-wrap text-center justify-center m-auto gap-3 md:gap-9">
            <p>Summer Sale For All Suits And Free Express Delivery - OFF 50%!</p>
            <a className="underline" href="#">Shop Now</a>
          </div>
        </div>
        <nav className={`flex ${scrolled ? "fixed top-0" : "top-[5%]"} bg-white duration-300 w-full justify-between z-[9099] sm:flex-nowrap items-center border-b py-5`}>
          <div className="sm:w-auto ps-4 sm:ps-0 text-[35px] text-center font-semibold">
            <div className="overflow-hidden w-[50px] sm:w-[100px] rounded-full">
              <img src={logo} alt="" />
            </div>
          </div>
          <div onClick={() => setNev(!showNev)} className="block order-3 lg:hidden pe-4 text-[35px]">
            <IoMenu />
          </div>
          <div className={`${showNev ? "end-0" : "end-[-100%] lg:end-0"} duration-300 lg:w-[70%] absolute w-[80%] md:w-[35%] bg-neutral-200 lg:bg-inherit h-screen lg:h-fit top-full lg:relative`}>
            <ul className="flex flex-col gap-[60px] mt-9 lg:mt-0 lg:gap-0 lg:flex-row w-full text-[18px] items-center justify-around">
              <Link to={"/"} className="hover:underline cursor-pointer">Home</Link>
              <Link to={"/about"} className="hover:underline cursor-pointer">About</Link>
              <Link to={"/contact"} className="hover:underline cursor-pointer">Contact Us</Link>
            </ul>
          </div>
          <div className="w-[95%] sm:order-1 order-2 relative sm:mt-0 sm:w-[80%] lg:w-[40%] flex justify-around">
            <div className="bg-neutral-100 w-[70%] sm:w-fit flex items-center pe-4 sm:pe-7 rounded">
              <input
                placeholder="Search...."
                className="bg-inherit w-full ps-3 py-1 sm:py-2 focus:outline-none border-0"
                type="text"
                value={searchInput} // Bind to searchInput state
                onChange={handleSearchInputChange} // Handle input change
              />
              <div className="text-[25px]">
                <IoSearch />
              </div>
            </div>
            <div className="text-[28px] py-2">
              <FaRegHeart className="hover:text-red-500" />
            </div>
            <Link to={"/cart"} className="text-[35px] py-2 relative">
              <MdOutlineShoppingCart />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                {getCartCount()}
              </span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="h-[24vh] sm:h-0 sm:pt-[190px]"></div>
    </>
  );
}

export default Header;
