"use client";

import { cn } from "@/utils";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMoon,
  AiOutlineSun,
} from "react-icons/ai";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(resolvedTheme);

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme, pathname]);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/stuff", label: "Stuff" },
  ];

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className="border-b border-gray-400 py-8 dark:bg-primaryGrey00 dark:text-primaryWhite">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        <a href="/">
          <h1 className="text-4xl lg:text-6xl ml-4 lg:ml-0">ERIC KENNES</h1>
        </a>
        <nav className="flex items-center">
          <button
            onClick={toggleTheme}
            className="h-10 w-10 p-2 rounded-md mr-8 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {currentTheme === "dark" ? (
              <AiOutlineSun className="h-6 w-6" />
            ) : (
              <AiOutlineMoon className="h-6 w-6" />
            )}
          </button>
          <div className="lg:hidden">
            <button onClick={toggleNav} aria-label="Toggle navigation">
              <AiOutlineMenu
                className={cn("h-8 w-8 mr-4", isNavOpen && "hidden")}
              />
            </button>
          </div>
          <div
            className={cn(
              "fixed inset-0 z-50 flex flex-col items-center justify-center bg-primaryWhite dark:bg-primaryGrey opacity-95 transition-opacity duration-300",
              isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <button
              className="absolute top-0 right-0 py-8 mr-4"
              onClick={closeNav}
              aria-label="Close navigation"
            >
              <AiOutlineClose className="h-8 w-8" />
            </button>
            <ul className="flex flex-col items-center justify-between">
              {navLinks.map((link) => (
                <li key={link.href} className="my-6 uppercase">
                  <a
                    href={link.href}
                    onClick={closeNav}
                    className={cn(
                      "text-2xl",
                      pathname === link.href && "font-bold underline"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="hidden space-x-8 lg:flex text-2xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    pathname === link.href && "font-bold underline"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
