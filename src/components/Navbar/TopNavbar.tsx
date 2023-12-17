import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CiSearch, CiSettings } from "react-icons/ci";
import NavLogo from "../../assets/images/nav-logo.png";
import { HiMenuAlt1 } from "react-icons/hi";

interface topBarPropTypes {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopNavbar = ({ toggle, setToggle }: topBarPropTypes) => {
  return (
    <div className="bg-primary flex justify-between items-center shadow py-2 px-6 sticky top-0 w-full">
      <div
        onClick={() => setToggle(!toggle)}
        className="lg:hidden md:hidden block cursor-pointer"
      >
        <HiMenuAlt1 className="text-white h-6 w-6" />
      </div>
      <div className="transition-all duration-300 cursor-pointer rounded-full flex items-center gap-4 lg:px-20">
        <div className="flex items-center text-white gap-3 font-semibold -ml-10 md:ml-0 lg:ml-0 text-xl">
          <img className="w-10 h-6" src={NavLogo} alt="" />
          <h1>Stack</h1>
        </div>
      </div>
      {/* Navigation Links (Desktop) */}
      <div className="text-white hidden lg:flex">
        <NavLink
          className="cursor-pointer hover: px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className="cursor-pointer hover: px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
          to={"/users"}
        >
          Users
        </NavLink>
        <NavLink
          className="cursor-pointer hover: px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
          to={"/projects"}
        >
          Projects
        </NavLink>
        <NavLink
          className="cursor-pointer hover: px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
          to={"/tasks"}
        >
          Tasks
        </NavLink>
        <NavLink
          className="cursor-pointer hover: px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
          to={"/reporting"}
        >
          Reporting
        </NavLink>
      </div>
      {/* Mobile Menu */}
      {toggle && (
        <div className="lg:hidden md:hidden block text-white absolute top-16 left-0 right-0 bg-primary">
          <NavLink
            className="block px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
            to={"/home"}
          >
            Home
          </NavLink>
          <NavLink
            className="block px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
            to={"/users"}
          >
            Users
          </NavLink>
          <NavLink
            className="block px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
            to={"/projects"}
          >
            Projects
          </NavLink>
          <NavLink
            className="block px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
            to={"/tasks"}
          >
            Tasks
          </NavLink>
          <NavLink
            className="block px-4 py-3 rounded-md hover:bg-[#7f56d9] hover:"
            to={"/reporting"}
          >
            Reporting
          </NavLink>
        </div>
      )}

      <div className="flex gap-3 items-center">
        <div className="rounded-full cursor-pointer">
          <div className="flex items-center gap-4">
            <CiSearch className="h-6 w-6 text-[#D6BBFB]" />
            <IoIosNotificationsOutline className="h-6 w-6 text-[#D6BBFB]" />
            <CiSettings className="h-6 w-6 text-[#D6BBFB]" />
            <img
              className="inline rounded-full h-9 w-9"
              src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
