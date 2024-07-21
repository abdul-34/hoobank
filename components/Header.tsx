"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <nav
      className={`relative shadow ${
        isOpen && "bg-gray-800"
      } md:bg-transparent px-4 md:px-6 lg:pl-16`}
    >
      <div className="container py-6 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href={"#"} className="flex gap-1 items-center">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Float UI logo"
            />
            <p className="text-lg font-semibold text-white hidden md:block">
              Hoo<span className="text-green-1">Bank</span>
            </p>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? <MenuIcon /> : <CloseIcon />}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-5 md:mx-6">
            {navLinks.map((item, idx) => (
              <li className="text-white hover:text-white/80" key={idx}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
export default Header;
