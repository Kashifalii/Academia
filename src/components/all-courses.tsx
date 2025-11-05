import React from "react";

// icons
import { LuDumbbell } from "react-icons/lu";
import { LuGuitar } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";
import { LuPalette } from "react-icons/lu";
import { LuWallpaper } from "react-icons/lu";
import { LuServerCog } from "react-icons/lu";
import { LuShovel } from "react-icons/lu";
import { LuMonitorSpeaker } from "react-icons/lu";
import { LuMicrochip } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { LuHandshake } from "react-icons/lu";
import { LuAppWindow } from "react-icons/lu";

function AllCourses() {
  const cardsData = [
    {
      icon: (
        <LuWallpaper className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "UI/UX Design Courses",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuPalette className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Art & Design",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuServerCog className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Computer Science",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuShovel className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "History & Archeologic",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuMonitorSpeaker className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Software Engineering",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuMicrochip className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Information Software",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuDumbbell className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Health & Fitness",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuDollarSign className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Marketing",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuPencilRuler className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Graphic Design",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuGuitar className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Music",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuHandshake className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Business Administration",
      courses: "12 Courses",
    },
    {
      icon: (
        <LuAppWindow className="text-myblue text-4xl md:text-5xl xl:text-6xl group-hover:text-white" />
      ),
      title: "Web Management",
      courses: "12 Courses",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* heading */}
        <div className="text-center">
          <h6 className="text-lg text-myblue uppercase font-bold mb-2">
            All Courses
          </h6>
          <h1 className="text-4xl lg:text-5xl text-[#1e1e1e] font-semibold mb-20">
            Browse Every Online Courses We Offer
          </h1>
        </div>

        {/* cards Wrapper */}
        <div className="flex items-center justify-between flex-wrap gap-y-5 ">
          {/* cards */}
          {cardsData.map((items, index) => (
            <div
              key={index}
              className="w-full min-[350px]:w-[48%] xs:w-[31%] sm:w-[23%] lg:w-[15.5%] h-[200px] md:h-[220px] bg-white rounded-md flex flex-col items-center justify-center p-5 text-center text-myblack  shadow-sm hover:shadow-xl group hover:bg-myblue cursor-pointer hover:text-white transition-all duration-300"
            >
              {items.icon}
              <h3 className="font-semibold text-lg md:text-xl py-2">
                {items.title}
              </h3>
              <p className="text-sm font-medium  bg-gray-50 px-2 py-1 rounded-sm text-myblue">
                {items.courses}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllCourses;
