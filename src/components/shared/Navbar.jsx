import React from "react";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from "react-router";
import navLogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className=" container  mx-auto flex justify-between">
        <div className=" flex items-center   ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "p-2 bg-green-900 text-white font-bold rounded" : "p-2 rounded hover:bg-gray-200"}`
                }
              >
                <button className=" flex items-center gap-2 cursor-pointer">
                  <RiHome2Line /> Home
                </button>
              </NavLink>

              <NavLink
                to={"/timeline"}
                className={({ isActive }) =>
                  `${isActive ? "p-2 bg-green-900 text-white font-bold rounded" : "p-2 rounded hover:bg-gray-200"}`
                }
              >
                <button className=" flex items-center gap-2 cursor-pointer">
                  <RiTimeLine /> Timeline
                </button>
              </NavLink>

              <NavLink
                to={"/stats"}
                className={({ isActive }) =>
                  `${isActive ? "p-2 bg-green-900 text-white font-bold rounded " : "p-2 rounded hover:bg-gray-200"}`
                }
              >
                <button className=" flex items-center gap-2 cursor-pointer">
                  <TfiStatsUp /> Stats
                </button>
              </NavLink>
            </ul>
          </div>
          <img src={navLogo} alt="" className="h-[50px] w-[190px]" />
        </div>
        <div className=" hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "p-2 bg-green-900 text-white font-bold rounded" : "p-2 rounded hover:bg-gray-200"}`
              }
            >
              <button className=" flex items-center gap-2 cursor-pointer">
                <RiHome2Line /> Home
              </button>
            </NavLink>

            <NavLink
              to={"/timeline"}
              className={({ isActive }) =>
                `${isActive ? "p-2 bg-green-900 text-white font-bold rounded" : "p-2 rounded hover:bg-gray-200"}`
              }
            >
              <button className=" flex items-center gap-2 cursor-pointer">
                <RiTimeLine /> Timeline
              </button>
            </NavLink>

            <NavLink
              to={"/stats"}
              className={({ isActive }) =>
                `${isActive ? "p-2 bg-green-900 text-white font-bold rounded " : "p-2 rounded hover:bg-gray-200"}`
              }
            >
              <button className=" flex items-center gap-2 cursor-pointer">
                <TfiStatsUp /> Stats
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
