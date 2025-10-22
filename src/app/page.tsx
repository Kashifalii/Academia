"use client";
import Navbar from "@/components/navbar";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <header className="bg-[url('../../public/Images/bg_1.webp')] bg-cover h-screen w-full flex items-center ">
        <Navbar />
        <div className="container mx-auto px-4 relative">
          {/* header-content */}
          <div className="text-box w-full md:w-[500px]">
            <h6 className="text-gray-100 uppercase font-bold mb-1 text-sm xs:text-base">
              Welcome to Academia
            </h6>
            <h1 className="text-6xl xxs:text-4xl md:text-5xl text-white font-bold mb-4">
              Best Online Education Expertise
            </h1>
            <p className="text-gray-50 text-lg font-medium leading-snug mb-10">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button-wrapper flex-col xs:flex xs:flex-row xs:items-center gap-3 w-full xs:w-fit ">
              <a
                href="#"
                className="bg-myblue text-white px-7 py-4 mb-3 xs:mb-0 text-sm font-bold rounded-sm flex items-center xs:justify-baseline justify-center gap-2 xs:w-fit w-full transition-all hover:shadow-lg"
              >
                GET STARTED NOW{" "}
                <MdOutlineArrowRightAlt className="text-xl inline" />{" "}
              </a>
              <a
                href="#"
                className="bg-white text-myblue px-7 py-4 text-sm font-bold rounded-sm flex items-center xs:justify-baseline justify-center gap-2 xs:w-fit w-full transition-all hover:shadow-lg "
              >
                VIEW COURSE{" "}
                <MdOutlineArrowRightAlt className="text-xl inline" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
