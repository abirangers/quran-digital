import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseNav = () => {
    setIsOpen(false);
  };

  const handleLink = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`top-0 left-0 right-0 sticky z-40 bg-white ${
        !isOpen ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between w-full py-4">
          <div
            className="flex items-center justify-start cursor-pointer"
            onClick={handleLink}
          >
            <img src={logo} alt="logo" width={55} />
            <h1 href="/" className="text-2xl font-semibold uppercase">
              Qur{"'"}an Pro
            </h1>
          </div>
          <NavList
            handleOpen={handleCloseNav}
            wrapperClass={`absolute lg:static lg:h-max left-0 right-0 top-[85px] h-0 ${
              isOpen ? "h-[176px]" : ""
            } transition-all duration-500 ease-in-out overflow-hidden bg-white shadow-md lg:bg-transparent lg:shadow-none`}
            listClass={`flex flex-col items-center justify-center lg:flex-row`}
          />
          <button
            className="bg-white top border rounded-md cursor-pointer w-[60px] h-10 lg:invisible border-black/10 mr-6"
            onClick={handleOpen}
          >
            <FaBars className="w-full text-xl" />
          </button>
        </nav>
      </div>
    </header>
  );
};

const NavList = ({ wrapperClass, listClass, handleOpen }) => {
  return (
    <div className={wrapperClass}>
      <ul className={listClass}>
        <List link="/" handleOpen={handleOpen}>
          Home
        </List>
        <List link="/quran" handleOpen={handleOpen}>
          qur{"'"}an
        </List>
        <List link="/about" handleOpen={handleOpen}>
          about
        </List>
        <List link="/contact" handleOpen={handleOpen}>
          contact
        </List>
      </ul>
    </div>
  );
};

const List = ({ link, children, handleOpen }) => {
  return (
    <li className="mx-[15px] my-2">
      <NavLink
        to={link}
        className={`text-xl font-medium tracking-wide uppercase transition duration-300 ease-in-out hover:text-primary`}
        onClick={handleOpen}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Navbar;
