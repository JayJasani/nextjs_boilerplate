"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "Home", url: "/home" },
    {
      name: "Services",
      url: "/",
      dropdown: [
        { name: "Service 1", url: "" },
        { name: "Service 2", url: "" },
        { name: "Service 3", url: "" },
      ],
    },
    { name: "About", url: "/" },
    { name: "Contact", url: "/" },
  ];
  return (
    <nav className="w-full bg-gray-800 shadow sticky top-0">
      <div className="justify-between px-4 mx-auto lg:max-w-10xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#" className="">
              <div className="avatar">
                <div className="rounded">
                  <h1 className="text-3xl text-white font-bold">NEXT JS  Boiler Plate </h1>
                </div>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-white" />
                ) : (
                  <AiOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-4 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map(({ name, url }, index) => (
                <li key={index} className="text-white">
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;