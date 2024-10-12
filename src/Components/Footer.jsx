import React from "react";
import { IoSearch } from "react-icons/io5";
import QR from "../assets/Qrcode 1.png";
import playstore from "../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import appstore from "../assets/AppStore.png";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "./../assets/b131427a-26be-4597-a09e-a12a8cbf9fcd.jpeg";
function Footer() {
  return (
    <>
      <div className="">
        <footer className="bg-black py-[70px] text-white">
          <div className="flex items-center flex-wrap justify-around">
            <div className="space-y-5 w-[90%] sm:w-[40%] lg:mt-0 mt-9 lg:w-fit">
              <div className=" text-[35px] flex flex-col items-center  font-semibold">
                <h1>Warm hugs</h1>
                <img className="w-[200px]" src={logo} alt="" />
              </div>
              <div className=" text-[25px]  ">
                <h1>Subscribe</h1>
              </div>
              <h5 className="text-[18px]">Get 10% off your first order</h5>
              <form action="">
                <div className="bg-inherit border-2 w-[70%] sm:w-fit flex items-center pe-4 sm:pe-7 rounded">
                  <div>
                    <input
                      placeholder="Enter Your email"
                      className="bg-inherit w-full ps-3 py-1 sm:py-2 focus:outline-none border-0 "
                      type="text"
                    />
                  </div>
                  <div className="text-[25px]">
                    <IoSearch />
                  </div>
                </div>
              </form>
            </div>
            <div className="space-y-5 w-[90%] sm:w-[40%] lg:mt-0 mt-9 lg:w-fit">
              <div className=" text-[25px]  font-semibold">
                <h1>Support</h1>
              </div>
              <div className=" text-[18px]  ">
                <h5>Skyways 284 , Porwal Road</h5>
                <h5>Kutwal colony , Lokegaon ,</h5>
                <h5>Pune maharashtra 411047</h5>
              </div>
              <h5 className="text-[18px]">info@warmhug.in</h5>
              <h5 className="text-[18px]">+91 20 1234 5678</h5>
            </div>
            <div className="space-y-5 w-[90%] sm:w-[40%] lg:mt-0 mt-9 lg:w-fit">
              <div className=" text-[25px]  font-semibold">
                <h1>Quick Links</h1>
              </div>
              <div>
                <ul className="space-y-4 text-[18px]">
                  <li className="hover:underline">Home</li>
                  <li className="hover:underline">About</li>
                  <li className="hover:underline">Contact</li>
                  <li className="hover:underline">Privacy Policy</li>
                  <li className="hover:underline">Terms Of Use</li>
                </ul>
              </div>
            </div>
            <div className="space-y-5 w-[90%] sm:w-[40%] lg:mt-0 mt-9 lg:w-fit">
              <div className=" text-[25px]  font-semibold">
                <h1>Social  Media</h1>
              </div>
              <div>
                <p className="text-[14px]">Save $3 with App New User Only</p>
                <div className="flex gap-2 mt-2">
                  <div>
                    <img src={QR} alt="" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <img src={playstore} alt="" />
                    <img src={appstore} alt="" />
                  </div>
                </div>
                <div className="flex text-[22px] gap-9  mt-5">
                  <FaFacebookF className="hover:text-blue-500" />
                  <SlSocialTwitter className="hover:text-blue-500" />
                  <FaInstagram className="hover:text-red-300" />
                  <FaLinkedinIn className="hover:text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
