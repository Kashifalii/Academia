"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  function toggleNavbar() {
    setOpenNav(!openNav);
  }

  // Helper function to check active link
  const isActive = (path: string) =>
    pathname === path
      ? "text-myblue font-bold"
      : "text-white hover:text-myblue transition";

  return (
    <nav className="absolute top-0 w-full">
      <div className="container mx-auto px-4 relative">
        {/* upper */}
        <div className="py-4 flex items-center justify-between">
          {/* logo */}
          <a href="#" className="flex flex-col gap-0 text-white">
            <span className="text-3xl font-extrabold mb-1">ACADEMIA</span>
            <span className="text-[13px] font-bold leading-0 ">
              ONLINE EDUCATION & LEARNING
            </span>
          </a>
          {/* social links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1eb2a675] hover:bg-myblue hover:shadow-lg text-white transition-all "
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1eb2a675] hover:bg-myblue hover:shadow-lg text-white transition-all "
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1eb2a675] hover:bg-myblue hover:shadow-lg text-white transition-all "
            >
              <GrInstagram />
            </a>
            <a
              href="#"
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1eb2a675] hover:bg-myblue hover:shadow-lg text-white transition-all "
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* lower */}
        <div className="bg-[#fcfcfc28] backdrop-blur-xs flex items-center justify-between">
          <ul className="flex items-center gap-9 ps-3 py-3 text-[17px] font-semibold">
            <li>
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className={isActive("/courses")}>
                All Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link href="/team" className={isActive("/team")}>
                Team
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={isActive("/pricing")}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/journal" className={isActive("/journal")}>
                Journal
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
          {/* get certified btn */}
          <a
            href="#"
            className="bg-myblue hover:bg-[#1b9c92] px-16 py-7 text-sm text-white font-bold tracking-wider transition-all"
          >
            GET CERTIFIED
          </a>
        </div>
      </div>
    </nav>
  );
}
