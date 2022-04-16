import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" rounded dark:bg-gray-800 fixed sticky top-0 z-40 w-full">
      <div className="flex  justify-between container md:mx-auto items-center h-16 ">
        <h1 className="text-slate-100 font-bold  text-2xl px-2"><Link to='/'>Logo</Link></h1>
        <nav className="text-slate-100 mr-4 ">
          <Link to="/" className="ml-5 hover:bg-sky-700">
            Home
          </Link>
          <a href="home#services" className="ml-5 hover:bg-sky-700">
            Services
          </a>

          <Link to="/about" className="ml-5">
            About
          </Link>
          <Link to="/login" className="ml-5">
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
