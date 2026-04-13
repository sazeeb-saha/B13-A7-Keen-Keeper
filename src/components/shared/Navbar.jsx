import React from "react";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from "react-router";
import navLogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto">
        <div className="navbar-start">
          <img src={navLogo} alt="" />
        </div>

        <div className="navbar-end gap-2 ">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
