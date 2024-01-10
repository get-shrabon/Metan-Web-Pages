import { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";
import Logo from "../../../assets/Express Life uk new logo file 01 1.png";
import { IoMdClose } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebookF,
  FaInstagram,
  FaMapLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  const [cross, setCross] = useState(true);
  return (
    <div>
      <div className="navbar justify-between container mx-auto">
        <div className="">
          <a href="/" className="flex items-center gap-2">
            <img className="w-24" src={Logo} alt="" />
            <h3 className="text-2xl font-bold text-white hidden lg:flex">
              Express Life
            </h3>
          </a>
        </div>

        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <details>
                <summary className="nav__link">About</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/aboutUs" className="nav__link">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav__link" to="/ourTeam">
                      Our Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav__link" to="/privacyPolicy">
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav__link" to="/termsCondition">
                      Terms and Conditions
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="nav__link">Features</summary>
                <ul className="p-2 space-y-3">
                  <li>
                    <NavLink className="nav__link" to="/features">
                      Features
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav__link" to="/featuresDetails">
                      Features Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav__link" to="/projects">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav__link" to="/projectsDetails">
                      Projects Details
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <NavLink className="nav__link" to="/package">
                Package
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="nav__link">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav__link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sm-d-none">
          <div className="drawer mr-5">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                onClick={() => setCross(!cross)}
                htmlFor="my-drawer"
                className="text-3xl font-bold cursor-pointer text-[#D02EF0]"
              >
                {cross ? (
                  <HiMiniBars3CenterLeft />
                ) : (
                  <IoMdClose
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className=""
                  ></IoMdClose>
                )}
              </label>
            </div>
            <div className="drawer-side w-[fit-content]">
              <div className="text-center p-4 w-96 min-h-full drawer__bg text-base-content">
                <img className="w-52 mx-auto" src={Logo} alt="" />
                <div className="mt-16 text-white font-OutFit space-y-5">
                  <h2 className="text-3xl font-OutFit font-bold">
                    Contact Information
                  </h2>
                  <p className="custom__bg__color p-7 mx-auto rounded text-5xl w-[fit-content] ">
                    <LuPhoneCall />
                  </p>
                  <p className="text-xl">
                    <a href="tel:07209264">07209264</a> <br />
                  </p>
                  <p className="custom__bg__color p-7 mx-auto rounded text-5xl w-[fit-content] ">
                    <TfiEmail />
                  </p>
                  <p className="text-xl">
                    <a href="mailto:support@expresslife.uk">
                      support@expresslife.uk
                    </a>
                  </p>
                  <p className="custom__bg__color p-7 mx-auto rounded text-5xl w-[fit-content] ">
                    <FaMapLocationDot />
                  </p>
                  <p className="text-xl">
                    16 Harrison Road, Fulwood, Preston, Lancashire, England, PR2
                    9QH
                  </p>
                  <div className="flex justify-center gap-2 drawer__icons">
                    <a
                      className="border drawer__icon rounded p-4 text-2xl border-[#d02ef0]"
                      href=""
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="border rounded p-4 text-2xl border-[#d02ef0]"
                      href=""
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="border rounded p-4 text-2xl border-[#d02ef0]"
                      href=""
                    >
                      <FaTwitter />
                    </a>
                  </div>
                  <p className="text-white text-sm">
                    © 2023 Express Life - All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a className="btn__bg py-4 px-6 mr-3 rounded text-nowrap cursor-pointer font-OutFit">
            Login
          </a>
          <a className="border border-[#d02ef0] py-4 text-white px-6 rounded text-nowrap cursor-pointer font-OutFit">
            Sign Up
          </a>
        </div>
        <div className="drawer justify-between lg:hidden">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="nav-drawer"
              className="text-3xl font-bold cursor-pointer text-[#D02EF0]"
            >
              <HiMiniBars3CenterLeft />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="nav-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu menu-vertical space-y-3 p-4 w-80 min-h-full bg-base-200 drawer__bg text-base-content">
              <img className="w-32 mb-5 mx-auto" src={Logo} alt="" />
              <li>
                <NavLink className="nav__link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <details>
                  <summary className="nav__link">About</summary>
                  <ul className="p-2">
                    <li>
                      <NavLink to="/aboutUs" className="nav__link">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav__link" to="/ourTeam">
                        Our Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav__link" to="/privacyPolicy">
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav__link" to="/termsCondition">
                        Terms and Conditions
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="nav__link">Features</summary>
                  <ul className="p-2 space-y-3">
                    <li>
                      <NavLink className="nav__link" to="/features">
                        Features
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav__link" to="/featuresDetails">
                        Features Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav__link" to="/projects">
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav__link" to="/projectsDetails">
                        Projects Details
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <NavLink className="nav__link" to="/package">
                  Package
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="nav__link">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
