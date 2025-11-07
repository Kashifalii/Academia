import React from "react";
import Navbar from "./navbar";
import Link from "next/link";

import { IoChevronBack } from "react-icons/io5";

export default function PagesHeader({ title }: { title?: string }) {
  return (
    <header className="relative h-[73vh] w-full bg-[url('/Images/courses-bg-small.webp')] md:bg-[url('/Images/courses-bg.webp')] bg-cover lg:bg-top bg-no-repeat bg-blend-darken bg-[#00000028]">
      {/* navbar */}
      <Navbar />

      <div className="container mx-auto px-4">
        {/* content wrapper */}
        <div className="flex h-[73vh] flex-col items-center justify-center text-center">
          <Link
            href="/"
            aria-label="homepage link"
            className="bg-myblue font-semibold px-4 py-2 mb-4 text-white rounded-full hover:bg-[#0da190] transition-all flex items-center gap-1"
          >
            <IoChevronBack aria-label="back icon" className="inline text-lg" />
            HOME
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
