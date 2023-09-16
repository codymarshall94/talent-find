"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Link = "find" | "about" | "contact";

const routes = [
  {
    name: "Find Talent",
    slug: "find",
    path: "/find",
  },
  {
    name: "About Us",
    slug: "about",
    path: "/about",
  },
  {
    name: "Contact Us",
    slug: "contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<Link>("find");

  return (
    <nav className="w-full h-16 flex flex-row justify-between items-center px-4">
      <div className="flex flex-row items-center">
        <Link href="/" className="text-black font-bold text-xl">Stuntlink</Link>
      </div>
      {/* mobile menu */}
      <div
        className={`md:static absolute top-0 left-0 right-0 z-10 flex flex-col items-center justify-center bg-white transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }
        transition-transform duration-300 ease-in-out py-4 h-screen`}
      >
        <div className="absolute top-0 right-0 mr-4 mt-4">
          <FontAwesomeIcon
            icon={faClose}
            className="md:hidden cursor-pointer"
            size="2x"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl font-bold text-black">
          {routes.map((route) => (
            <li
              key={route.slug}
              className={`${activeLink === route.slug ? "text-blue-600" : ""}
                hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md`}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center md:hidden gap-4 mt-4 w-1/2">
          <button className="mr-2 border border-black rounded-md px-4 py-2 hover:bg-gray-100 w-full">
            Sign In
          </button>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 w-full">
            Join Stuntlink
          </button>
        </div>
      </div>

      {/* desktop menu */}
      <div className="flex flex-row items-center justify-center md:justify-start hidden md:visible ">
        <button className="mr-2">Sign In</button>
        <button className="bg-blue-600 text-white rounded-md px-4 py-2">
          Join Stuntlink
        </button>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="md:hidden cursor-pointer"
        size="2x"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </nav>
  );
}
