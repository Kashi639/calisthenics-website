import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";


function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">

          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">CalisthenicsX</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 item center">
            <Link to={"/signin"}>
              <Button className="cursor-pointer" >Sign In</Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="cursor-pointer" >Create an Account</Button>
            </Link>
            <ModeToggle />
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X />:<Menu />}
            </button>
          </div>

        </div>

        {mobileDrawerOpen && (
          <div className="fixed bg-(--background) right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <Link to={item.href}>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
            </ul>
            <div className="flex space-x-6">
            <Link to={"/signin"}>
              <Button className="cursor-pointer">Sign In</Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="cursor-pointer">Create an Account</Button>
            </Link>
            <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
