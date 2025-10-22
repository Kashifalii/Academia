"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsFillClockFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";

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
        <div className="py-6 flex items-center justify-between">
          {/* logo */}
          <a
            href="#"
            className="flex flex-col gap-0 text-white group transition-all duration-300"
          >
            <span className="logo text-3xl font-bold mb-1 group-hover:text-myblue transition-all duration-300">
              ACADEMIA
            </span>
            <span className="text-[13px] font-bold leading-0 ">
              ONLINE EDUCATION & LEARNING
            </span>
          </a>
          {/* time call links */}
          <div className=" flex items-center gap-16">
            {/* time */}
            <div className="hidden lg:flex items-center gap-4">
              <BsFillClockFill className="text-white text-4xl xl:text-5xl" />
              <ul className="text-white font-bold">
                <li>Monday - Friday</li>
                <li>8:00AM-8:00PM</li>
              </ul>
            </div>
            {/* call */}
            <div className="hidden lg:flex items-center gap-4">
              <FaPhoneVolume className="text-white text-4xl xl:text-5xl" />
              <ul className="text-white font-bold">
                <li>Call Us</li>
                <li>+2 392 3929 210</li>
              </ul>
            </div>

            {/* social links */}
            <div className="hidden xs:flex items-center gap-3">
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
        </div>

        {/* lower */}
        <div className="bg-[#fcfcfc28] backdrop-blur-xs hidden lg:flex items-center justify-between">
          <ul className="flex items-center gap-9 ps-5 py-3 text-[17px] font-semibold">
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
      {/* mobile navbar  */}
      <div className="relative flex items-center justify-between bg-myblue lg:hidden">
        {/* get certified btn */}
        <a
          href="#"
          className="bg-[#1b9c92] hover:bg-[#1ebbae] px-6 py-[30px] text-sm text-white font-bold tracking-wider transition-all"
        >
          GET CERTIFIED
        </a>

        {/* menu btn */}
        <a
          href="#"
          className="bg-[#1b9c92] hover:bg-[#1ebbae] px-6 py-6 text-sm text-white font-bold tracking-wider transition-all flex items-center gap-1"
          onClick={toggleNavbar}
        >
          <HiMenuAlt3 className="size-8" /> MENU
        </a>

        {/* dropdown menu */}
        <ul
          className={`flex flex-col items-center text-center  gap-6 ps-5 py-8 text-[17px] font-semibold absolute top-[100%] bg-[#0ab4a63d] backdrop-blur-2xl w-full z-10 ${
            openNav ? "flex" : "hidden"
          }`}
        >
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
          <li>
            {/* social links */}
            <div className="flex xs:hidden items-center gap-3">
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
          </li>
        </ul>
      </div>
    </nav>
  );
}
