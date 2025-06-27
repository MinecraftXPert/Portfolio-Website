import { useState } from "react";
import HomeIcon from "../Icons/HomeIcon";
import AboutIcon from "../Icons/AboutIcon";
import ProjectsIcon from "../Icons/ProjectsIcon";
import ContactIcon from "../Icons/ContactIcon";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function toggleSideBar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <nav className="shadow-sm w-full p-1  sm:p-3">
      {/* navbar */}
      <ul className="flex sm:justify-around justify-start items-center p-5 ml-10 mr-10 sm:gap-0 gap-2">
        <li className="sm:ml-1 mr-auto text-2xl">
          <span className="text-3xl">
            Noah
          </span>
        </li>
        <li className="sm:block hidden px-[25px] py-0 text-[14px]">
          <a className="flex items-center gap-2" href="#">
            <HomeIcon /> Home
          </a>
        </li>
        <li className="sm:block hidden px-[25px] py-0 text-[14px]">
          <a className="flex items-center gap-2" href="#">
            <AboutIcon />
            About
          </a>
        </li>
        <li className="sm:block hidden px-[25px] py-0 text-[14px]">
          <a className="flex items-center gap-2" href="#">
            <ProjectsIcon />
            Projects
          </a>
        </li>
        <li className="sm:block hidden px-[25px] py-0 text-[14px]">
          <a className="flex items-center gap-2" href="#">
            <ContactIcon />
            Contact
          </a>
        </li>
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <svg
          onClick={toggleSideBar}
          className=" w-[20px] sm:hidden cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </ul>
      {/* Navbar for hamburger menu */}
      <ul
        className={`fixed top-0 right-0 ${
          sidebarOpen ? "w-0" : "w-[250px]"
        } transition-all ease-in duration-500 h-[100vh] z-[999] flex flex-col justify-start items-start gap-5 bg-black/15 shadow-md backdrop-blur-[5px] overflow-x-hidden`}
      >
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <svg
          onClick={toggleSideBar}
          className="mx-5 w-[25px] cursor-pointer my-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
        <li className="px-[30px] py-0 text-[14px]">
          <a className="flex items-center gap-3"href="#">
            <HomeIcon />
            Home
          </a>
        </li>
        <li className="px-[30px] py-0 text-[14px]">
          <a className="flex items-center gap-3" href="#">
            <AboutIcon />
            About
          </a>
        </li>
        <li className="px-[30px] py-0 text-[14px]">
          <a className="flex items-center gap-3" href="#">
            <ProjectsIcon />
            Projects
          </a>
        </li>
        <li className="px-[30px] py-0 text-[14px]">
          <a className="flex items-center gap-3" href="#">
            <ContactIcon />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
