"use client";
import { cn } from "@/utils";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import { AiOutlineSun, AiOutlineMoon, AiOutlineLoading } from "react-icons/ai";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="border-b border-gray-400 py-8 dark:bg-primaryGrey00 dark:text-primaryWhite">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        <a href="/">
          <h1 className="text-4xl lg:text-6xl ml-4 lg:ml-0">ERIC KENNES</h1>
        </a>
        <nav className="flex items-center">
          {mounted &&
            (theme === "dark" ? (
              <AiOutlineSun
                className="h-10 w-10 hover:bg-primaryGrey p-2 rounded-md mr-8 cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <AiOutlineMoon
                className="h-10 w-10 hover:bg-primaryWhite p-2 rounded-md mr-8 cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            ))}
          {!mounted && (
            <AiOutlineLoading className="h-6 w-6 mr-12  animate-spin" />
          )}
          <section className="flex lg:hidden text-4xl">
            <div onClick={toggleNav}>
              <AiOutlineMenu
                className={cn("h-8 w-8 mr-4", isNavOpen && "hidden")}
              />
            </div>
            <div
              className={cn(
                !isNavOpen && "hidden",
                isNavOpen &&
                  "absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-primaryWhite dark:bg-primaryGrey opacity-95 z-50"
              )}
            >
              <div className="absolute top-0 right-0 py-8" onClick={closeNav}>
                <AiOutlineClose className="h-8 w-8 mr-4" />
              </div>
              <ul className="flex flex-col items-center justify-between">
                {navLinks.map((link) => (
                  <li key={link.href} className="my-6 uppercase">
                    <a
                      href={link.href}
                      onClick={closeNav}
                      className={cn(
                        pathname === link.href && "font-bold underline"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
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
