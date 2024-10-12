import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import logo from "./../images/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg"
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
        className={`${scrolled ? "" : "fixed "}  duration-300  w-full z-10 `}
      >
        <div className="bg-black py-4 text-[9px] sm:text-[16px] w-full text-white  flex flex-wrap">
          <div className="flex flex-wrap text-center justify-center m-auto gap-3 md:gap-9">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a className="underline" href="#">
              Shop Now
            </a>
          </div>
          <div className=" hidden md:block">
            <select
              className="bg-inherit  focus:outline-none text-center"
              name=""
              id=""
            >
              <option value="#">English</option>
              <option value="#">Hindi</option>
            </select>
          </div>
        </div>
        <nav
          className={`flex ${
            scrolled ? "fixed top-0" : "top-[5%]"
          } bg-white duration-300  w-full  flex-wrap justify-between  sm:flex-nowrap items-center border-b py-5`}
        >
          <div className="sm:w-[20%] ps-4 sm:ps-0 sm:order-1 text-[35px] text-center font-semibold">
            <div className="overflow-hidden w-[100px] rounded-full" >
                <img className="" src={logo} alt="" />
            </div>
            <h1></h1>
          </div>
          <div
            onClick={() => {
              setNev(!showNev);
            }}
            className="block  lg:hidden sm:order-3  pe-4 text-[35px]"
          >
            <IoMenu />
          </div>
          <div
            className={`${
              showNev ? "end-0" : "end-[-100%] lg:end-0"
            } duration-300 lg:w-[40%]  absolute w-[80%] md:w-[35%] bg-neutral-200 lg:bg-inherit h-screen lg:h-fit  top-full  order-2 lg:relative`}
          >
            <ul className="flex flex-col gap-[60px] mt-9 lg:mt-0 lg:gap-0 lg:flex-row w-full text-[18px] items-center justify-around">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">About</li>
              <li className="hover:underline">Contact Us</li>
            </ul>
          </div>
          <div className="w-[95%] relative mt-4 sm:mt-0 sm:order-2 lg:order-3 m-auto sm:w-[80%] lg:w-[40%] flex justify-around">
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
            <div className="text-[25px] text-white  py-1 ">
              <button onClick={()=>{ setprofile(!showProfile) }} className="bg-primary p-2 rounded-full">
                <FiUser />
              </button>
              <div className={`${showProfile ? "block" : "hidden"} absolute space-y-5  duration-300 top-full bg-primary p-5 rounded-lg  text-[20px] w-fit right-11`}>
                <ul className="flex gap-3 items-center">
                  <FiUser className="text-[25px]" />
                  <li>Manage Your Account</li>
                </ul>
                <ul className="flex gap-3 items-center">
                  <HiOutlineShoppingBag className="text-[25px]" />

                  <li>My Order</li>
                </ul>
                <ul className="flex gap-3 items-center">
                  <MdOutlineCancel className="text-[30px]" />
                  <li>My Cancellations</li>
                </ul>
                <ul className="flex gap-3 items-center">
                  <MdLogout className="text-[25px] rotate-180" />
                  <li>Logout</li>
                </ul>
              </div>
            </div>
            {/* <div className="text-[22px] py-2">
          <Link to={"/login"}>Login</Link>
          </div> */}
          </div>
        </nav>
      </header>
      <div className="h-[24vh] sm:h-0 sm:pt-[150px]"></div>
    </>
  );
}

export default Header;