import React, { useState } from "react";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router";
import navLogo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
      isActive
        ? "bg-green-800 text-white shadow-md"
        : "text-gray-700 hover:bg-green-100 hover:text-green-800"
    }`;

  const mobileClose = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={navLogo} alt="Logo" className="w-28 object-contain" />
          </NavLink>

          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/" className={navLinkStyle}>
              <RiHome2Line size={18} />
              Home
            </NavLink>

            <NavLink to="/timeline" className={navLinkStyle}>
              <RiTimeLine size={18} />
              Timeline
            </NavLink>

            <NavLink to="/stats" className={navLinkStyle}>
              <TfiStatsUp size={16} />
              Stats
            </NavLink>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-72 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            <NavLink to="/" className={navLinkStyle} onClick={mobileClose}>
              <RiHome2Line size={18} />
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={navLinkStyle}
              onClick={mobileClose}
            >
              <RiTimeLine size={18} />
              Timeline
            </NavLink>

            <NavLink to="/stats" className={navLinkStyle} onClick={mobileClose}>
              <TfiStatsUp size={16} />
              Stats
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
