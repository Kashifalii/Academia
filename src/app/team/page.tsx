import Footer from "@/components/footer";
import PagesHeader from "@/components/pages-header";
import Image from "next/image";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Team() {
  const cardsData = [
    {
      imageSrc: "/Images/team-1.webp",
      name: "Adrian Molises",
      role: "Lead Instructor",
    },
    {
      imageSrc: "/Images/team-2.webp",
      name: "Arthur MaGregor",
      role: "Web Developer",
    },
    {
      imageSrc: "/Images/team-3.webp",
      name: " Anna Hanzen",
      role: "UI/UX Designer",
    },
    {
      imageSrc: "/Images/team-4.webp",
      name: " Brian Wooden",
      role: "Marketing Expert",
    },
    {
      imageSrc: "/Images/team-3.webp",
      name: " Anna Hanzen",
      role: "UI/UX Designer",
    },
    {
      imageSrc: "/Images/team-4.webp",
      name: " Brian Wooden",
      role: "Marketing Expert",
    },
    {
      imageSrc: "/Images/team-1.webp",
      name: "Adrian Molises",
      role: "Lead Instructor",
    },
    {
      imageSrc: "/Images/team-2.webp",
      name: "Arthur MaGregor",
      role: "Web Developer",
    },
  ];

  return (
    <main>
      {/* header */}
      <PagesHeader title="Meet Our Team" />

      {/* team cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* cards wrapper */}
          <div className="flex justify-between gap-y-8 flex-wrap">
            {/* cards */}

            {cardsData.map((data, index) => (
              <div
                className="w-full xs:w-[48%] lg:w-[24%] group hover:shadow-xl hover:-translate-y-[2px] cursor-pointer transition-all duration-300"
                key={index}
              >
                {/* card image */}
                <div className="relative h-[400px] w-full">
                  <Image
                    src={data.imageSrc}
                    alt={data.name + " image"}
                    fill
                    className="object-cover object-top"
                  ></Image>
                  {/* social links */}
                  <div className="hidden group-hover:flex flex-col gap-4 items-center justify-center absolute bottom-2 left-2 transition-all duration-300 ">
                    <a
                      href="#"
                      aria-label="academia facebook page"
                      className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-myblue hover:-translate-y-1 hover:shadow-md shadow-black text-white transition-all duration-300 "
                    >
                      <FaFacebookF arial-label="Facebook icon" />
                    </a>
                    <a
                      href="#"
                      aria-label="academia twitter profile"
                      className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-myblue hover:-translate-y-1 hover:shadow-md shadow-black text-white transition-all duration-300 "
                    >
                      <FaTwitter arial-label="Twitter icon" />
                    </a>
                    <a
                      href="#"
                      aria-label="academia instagram account"
                      className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-myblue hover:-translate-y-1 hover:shadow-md shadow-black text-white transition-all duration-300 "
                    >
                      <GrInstagram arial-label="Instagram icon" />
                    </a>
                    <a
                      href="#"
                      aria-label="academia linkedin profile"
                      className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-myblue hover:-translate-y-1 hover:shadow-md shadow-black text-white transition-all duration-300 "
                    >
                      <FaLinkedinIn arial-label="LinkedinIn icon" />
                    </a>
                  </div>
                </div>
                {/* card details */}
                <div className="text-center bg-white p-5 group-hover:bg-myblue group-hover:text-white transition-colors duration-300">
                  <h3 className="text-base sm:text-lg xl:text-xl font-bold uppercase text-myblack mb-1 group-hover:text-white transition-colors duration-300">
                    {data.name}
                  </h3>
                  <h2 className="uppercase text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                    {data.role}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
}
