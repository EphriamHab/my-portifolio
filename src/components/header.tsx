"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const drawerBgClass = theme === "dark" ? "bg-gray-800" : "bg-slate-300";
  const drawerTextClass = theme === "dark" ? "text-gray-300" : "text-gray-900";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 shadow ${drawerBgClass} ${drawerTextClass}`}>
      <div className="flex justify-between items-center mx-4 md:mx-24 p-3">
        <h1 className="text-xl font-serif font-bold cursor-pointer">
        {`<Ephrem/>`}
        </h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-500 focus:outline-none"
          >
            {isOpen ? null : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex md:space-x-8">
          <a
            href="#"
            className="p-2 font-serif font-semibold cursor-pointer hover:bg-custom-purple rounded"
          >
            Home
          </a>
          <a
            href="#about"
            className="p-2 font-serif font-semibold cursor-pointer hover:bg-custom-purple rounded"
          >
            About
          </a>
          <a
            href="#services"
            className="p-2 font-serif font-semibold cursor-pointer hover:bg-custom-purple rounded"
          >
            Services
          </a>
          <a
            href="#skills"
            className="p-2 font-serif font-semibold cursor-pointer hover:bg-custom-purple rounded"
          >
            Skills
          </a>
          <a
            href="#project"
            className="p-2 font-serif font-semibold cursor-pointer hover:bg-custom-purple rounded"
          >
            Projects
          </a>
          <a
            href="#certification"
            className="p-2 font-serif font-semibold cursor-pointer hover:bg-custom-purple rounded"
          >
            Certification
          </a>
          <a href="#contact" className="p-2 font-serif font-semibold cursor-pointer  hover:bg-custom-purple rounded">
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
      {/* Drawer menu for small screens */}
      <div
        className={`fixed top-0 left-0 w-64 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden ${drawerBgClass} ${drawerTextClass}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-serif font-bold">{`<Ephrem/>`}</h2>
          <button
            onClick={toggleMenu}
            className="text-blue-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="p-2 font-serif font-semibold cursor-pointer  hover:bg-custom-purple rounded"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="p-2 font-serif font-semibold cursor-pointer  hover:bg-custom-purple rounded"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="p-2 font-serif font-semibold cursor-pointer  hover:bg-custom-purple rounded"
          >
            Services
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="p-2 font-serif font-semibold cursor-pointer  hover:bg-custom-purple rounded"
          >
            Skills
          </a>
          <a
            href="#project"
            onClick={() => setIsOpen(false)}
            className="p-2 font-serif font-semibold cursor-pointer  hover:bg-custom-purple rounded"
          >
            Projects
          </a>
          <a
            href="#certification"
            className="p-2 font-serif font-semibold cursor-pointer hover:bg-custom-purple rounded"
          >
            Certification
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="p-2 font-serif font-semibold cursor-pointer  hover:bg-custom-purple rounded"
          >
            Contact
          </a>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}
