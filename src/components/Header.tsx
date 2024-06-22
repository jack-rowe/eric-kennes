"use client";
import { cn } from "@/utils";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className=" border-b border-gray-400 py-8">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        <a href="/">
          <h1 className="text-4xl lg:text-6xl ml-8 lg:ml-0">ERIC KENNES</h1>
        </a>
        <nav>
          <section className="flex lg:hidden text-4xl">
            <div onClick={toggleNav}>
              <AiOutlineMenu
                className={cn("h-8 w-8 mr-8", isNavOpen && "hidden")}
              />
            </div>
            <div
              className={cn(
                !isNavOpen && "hidden",
                isNavOpen &&
                  "absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white opacity-85"
              )}
            >
              <div className="absolute top-0 right-0 py-8" onClick={closeNav}>
                <AiOutlineClose className="h-8 w-8 mr-8" />
              </div>

              <ul className="flex flex-col items-center justify-between">
                {navLinks.map((link) => (
                  <li key={link.href} className=" my-6 uppercase">
                    <a href={link.href} onClick={closeNav}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <ul className="hidden space-x-8 lg:flex text-2xl ">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
