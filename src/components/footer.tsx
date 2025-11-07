import React from "react";

import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* newsletter */}
      <section className="bg-myblue py-15 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-0">
            <div className="w-full sm:w-[55%] lg:w-[60%]">
              <h3 className="text-white text-2xl xl:text-4xl font-semibold">
                Newsletter - Stay tune and get the latest update
              </h3>
              <p className="text-gray-50 text-lg xl:text-xl mt-1">
                Far far away, behind the word mountains
              </p>
            </div>
            <form action="#" className="w-full sm:w-[38%] relative">
              <input
                type="email"
                placeholder="Enter email address"
                className="border-b-1 border-white pb-3 w-full text-white placeholder:text-white focus:outline-none "
              />
              <button type="submit" className="absolute right-0">
                <IoIosSend className="text-white text-2xl" />
                <span className="sr-only">Submit email address</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* footer wrapper */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap xl:justify-between justify-start gap-10 xl:gap-0 py-14">
          {/* first */}
          <div className="w-full sm:w-[45%] lg:w-[50%] xl:w-[20%] ">
            {/* logo */}
            <a
              href="#"
              aria-label="website logo"
              className="flex flex-col mb-8"
            >
              <span className=" text-myblack text-4xl font-bold mb-1">
                ACADEMIA
              </span>
              <span className="text-myblue text-[12px] font-semibold leading-0 ">
                ONLINE EDUCATION & LEARNING
              </span>
            </a>
            <p className="text-gray-500 font-medium">
              A small river named Duden flows by their place and supplies it
              with the necessary regalia is extraordinary.
            </p>

            {/* social links */}
            <div className="hidden xs:flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="academia facebook page"
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-myblue hover:-translate-y-1 hover:shadow-md shadow-black text-white transition-all duration-300 "
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="academia twitter profile"
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-myblue hover:-translate-y-1 hover:shadow-md shadow-black text-white transition-all duration-300 "
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="academia instagram account"
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-myblue hover:-translate-y-1 hover:shadow-md shadow-black text-white transition-all duration-300 "
              >
                <GrInstagram />
              </a>
              <a
                href="#"
                aria-label="academia linkedin profile"
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-myblue hover:-translate-y-1 hover:shadow-md shadow-black text-white transition-all duration-300 "
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* second */}
          <ul className="xs:w-[45%] sm:w-[20%] xl:w-[10%] flex flex-col gap-2">
            <h2 className="text-myblack text-xl mb-6 font-semibold ">
              Explore
            </h2>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="About Us"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Services
"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Courses"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Contact us"
              >
                Contact us
              </a>
            </li>
          </ul>

          {/* third */}
          <ul className="xs:w-[45%] sm:w-[20%] xl:w-[10%] flex flex-col gap-2 ps-10 xs:ps-0">
            <h2 className="text-myblack text-xl mb-6 font-semibold ">
              Quick Links
            </h2>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Pricing
"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Terms & Conditions"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Privacy"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-myblue hover:ps-1 transition-all duration-300"
                aria-label="Feedbacks"
              >
                Feedbacks
              </a>
            </li>
          </ul>

          {/* fourth */}
          <ul className="w-full sm:w-[45%] lg:w-[30%] xl:w-[22%] flex flex-col gap-5">
            <h2 className="text-myblack text-xl mb-4 font-semibold ">
              Recent Posts
            </h2>

            <li>
              <a
                href="#"
                aria-label="Creativity and Inspiration"
                className="flex items-center gap-3 "
              >
                <Image
                  src="/Images/f1.webp"
                  alt="Creativity and Inspiration post image"
                  width={50}
                  height={50}
                  className="rounded-sm shadow-sm object-cover"
                ></Image>

                <div>
                  <span className="text-sm flex items-baseline gap-1 text-myblue">
                    <BsCalendarDateFill className="inline" />
                    Jan. 18, 2021
                    <FaUser className="inline" />
                    Admin
                  </span>
                  <p className="text-gray-600 hover:text-myblue font-medium">
                    Creativity and Inspiration
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Build your Dream Software"
                className="flex items-center gap-3 "
              >
                <Image
                  src="/Images/f2.webp"
                  alt="Build your Dream Software post image"
                  width={50}
                  height={50}
                  className="rounded-sm shadow-sm object-cover"
                ></Image>

                <div>
                  <span className="text-sm flex items-baseline gap-1 text-myblue">
                    <BsCalendarDateFill className="inline" />
                    Feb. 21, 2021
                    <FaUser className="inline" />
                    Admin
                  </span>
                  <p className="text-gray-600 hover:text-myblue font-medium">
                    Build your Dream Software
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Engineering & AI Career"
                className="flex items-center gap-3 "
              >
                <Image
                  src="/Images/f3.webp"
                  alt="Engineering & AI Career post image"
                  width={50}
                  height={50}
                  className="rounded-sm shadow-sm object-cover"
                ></Image>

                <div>
                  <span className="text-sm flex items-baseline gap-1 text-myblue">
                    <BsCalendarDateFill className="inline" />
                    Jan. 18, 2021
                    <FaUser className="inline" />
                    Admin
                  </span>
                  <p className="text-gray-600 hover:text-myblue font-medium">
                    Engineering & AI Career
                  </p>
                </div>
              </a>
            </li>
          </ul>

          {/* fifth */}
          <ul className="w-full sm:w-[48%] lg:w-[50%] xl:w-[21%] flex flex-col gap-5">
            <h2 className="text-myblack text-xl mb-4 font-semibold ">
              Have a Questions?
            </h2>

            <li className="flex items-center gap-3 ">
              <MdLocationCity className="size-12 text-myblue" />
              <address className="text-sm text-gray-600">
                {" "}
                203 Fake St. Mountain View, San Francisco, California, USA
              </address>
            </li>
            <li className="flex items-center gap-3 ">
              <MdAttachEmail className="size-8 text-myblue" />
              <a
                href="#"
                aria-label="email address academiaofficial@gmail.com"
                className="text-sm text-gray-600"
              >
                academiaofficial@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 ">
              <MdAddCall className="size-8 text-myblue" />
              <a
                href="#"
                aria-label="phone number +2 392 3929 210"
                className="text-sm text-gray-600"
              >
                +2 392 3929 210
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
