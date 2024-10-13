import React, { useEffect, useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logo from "./../assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg";
import { useCart } from "../CartContext";
import { Link, useLocation } from "react-router-dom";

function Header({ setSearchQuery }) {
  const { getCartCount } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showNev, setNev] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Check login status when component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData && storedData.login) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearchQuery(value);
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

  useEffect(() => {
    setNev(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNev(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <header className={`${scrolled ? "" : "fixed "} duration-300 z-[9999] w-full`}>
        <div className="bg-black py-4 text-[9px] sm:text-[16px] w-full text-white flex flex-wrap">
          <div className="flex flex-wrap text-center justify-center m-auto gap-3 md:gap-9">
            <p>Summer Sale For All Suits And Free Express Delivery - OFF 50%!</p>
            <a className="underline" href="#">Shop Now</a>
          </div>
        </div>
        <nav className={`flex ${scrolled ? "fixed top-0" : "top-[5%]"} bg-white  duration-300 w-full justify-between z-[9099] sm:flex-nowrap items-center border-b py-5`}>
          <div className="sm:w-auto ps-4 sm:ps-2 text-[30px] sm:text-[35px] text-center font-semibold">
            <div className="overflow-hidden  w-[45px] sm:w-[100px] rounded-full">
              <img src={logo} alt="" />
            </div>
          </div>
          <div onClick={() => setNev(!showNev)} className="block order-3 lg:hidden pe-4 text-[30px] sm:text-[35px]">
            <IoMenu />
          </div>
          <div
            ref={menuRef}
            className={`${showNev ? "end-0" : "end-[-100%] lg:end-0"} duration-300 lg:w-[70%] absolute w-[80%] md:w-[35%] bg-neutral-200 lg:bg-inherit h-screen lg:h-fit top-full lg:relative`}
          >
            <ul className="flex flex-col gap-[60px] mt-9 lg:mt-0 lg:gap-0 lg:flex-row w-full text-[18px] items-center justify-around">
              <Link to={"/"} className="hover:underline cursor-pointer">Home</Link>
              <Link to={"/about"} className="hover:underline cursor-pointer">About</Link>
              <Link to={"/upcomming"} className="hover:underline cursor-pointer">Upcomming</Link>
              <Link to={"/GarmentPlanning"} className="hover:underline cursor-pointer">GarmentPlanning</Link>

              <Link to={"/contact"} className="hover:underline cursor-pointer">Contact Us</Link>
              {isLoggedIn ? (
                <Link to={"/profile"} className="hover:underline cursor-pointer">Profile</Link>
              ) : (
                <Link to={"/login"} className="hover:underline cursor-pointer">Login</Link>
              )}
            </ul>
          </div>
          <div className="w-[70%] sm:order-1 order-2 relative sm:mt-0 sm:w-[80%] lg:w-[40%] flex justify-around ">
            <div className="bg-neutral-100 w-[70%] sm:w-[60%] flex items-center pe-4 sm:pe-7 rounded">
              <input
                placeholder="Search...."
                className="bg-inherit w-full ps-3 sm:py-2 focus:outline-none border-0"
                type="text"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
              <div className="text-[25px]">
                <IoSearch />
              </div>
            </div>
            <Link to={"/cart"} className="text-[30px] sm:text-[35px] py-2 relative">
              <MdOutlineShoppingCart />
              <span className="absolute top-0 sm:-top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
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
