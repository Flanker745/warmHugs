import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import logo from "./../assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg"
function Header() {
  const [showNev, setNev] = useState(false);
  const [showProfile, setprofile] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [nev, setnev] = useState(false);
  return (
    <>
      <header
        className={`${scrolled ? "" : "fixed "}  duration-300 z-[9999] w-full  `}
      >
        <div className="bg-black py-4 text-[9px] sm:text-[16px] w-full  text-white  flex flex-wrap">
          <div className="flex flex-wrap text-center justify-center m-auto gap-3 md:gap-9">
            <p>
              Summer Sale For All  Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a className="underline" href="#">
              Shop Now
            </a>
          </div>
        </div>
        <nav
          className={`flex ${
            scrolled ? "fixed top-0" : "top-[5%]"
          } bg-white duration-300  w-full   justify-between z-[9099]  sm:flex-nowrap items-center border-b py-5`}
        >
          <div className=" sm:w-auto  ps-4 sm:ps-0  text-[35px] text-center font-semibold">
            <div className="overflow-hidden w-[50px] sm:w-[100px] rounded-full" >
                <img className="" src={logo} alt="" />
            </div>
            <h1></h1>
          </div>
          <div
            onClick={() => {
              setNev(!showNev);
            }}
            className="block order-3990  lg:hidden  pe-4 text-[35px]"
          >
            <IoMenu />
          </div>
          <div
            className={`${
              showNev ? "end-0" : "end-[-100%] lg:end-0"
            } duration-300 lg:w-[70%]  absolute w-[80%] md:w-[35%] bg-neutral-200 lg:bg-inherit h-screen lg:h-fit  top-full 2 lg:relative`}
          >
            <ul className="flex flex-col gap-[60px] mt-9 lg:mt-0 lg:gap-0 lg:flex-row w-full text-[18px] items-center justify-around">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">About</li>
              <li className="hover:underline">Contact Us</li>
            </ul>
          </div>
          <div className="w-[95%] sm:order-1 order-2 relative  sm:mt-0  sm:w-[80%] lg:w-[40%] flex justify-around">
            <div className="bg-neutral-100 w-[70%] sm:w-fit flex items-center pe-4 sm:pe-7 rounded">
              <div>
                <input
                  placeholder="Search...."
                  className="bg-inherit w-full ps-3 py-1 sm:py-2 focus:outline-none border-0 "
                  type="text"
                />
              </div>
              <div className="text-[25px]">
                <IoSearch />
              </div>
            </div>
            <div className="text-[28px] py-2">
              <FaRegHeart className="hover:text-red-500"/>
            </div>
            <div className="text-[35px] py-2">
              <MdOutlineShoppingCart />
            </div>
        
            {/* <div className="text-[22px] py-2">
          <Link to={"/login"}>Login</Link>
          </div> */}
          </div>
        </nav>
      </header>
      <div className="h-[24vh] sm:h-0 sm:pt-[190px]"></div>
    </>
  );
}

export default Header;