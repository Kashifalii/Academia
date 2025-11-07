"use client";

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  rating: number;
  user: string;
  userName: string;
  lecture: string;
  styls?: string;
};

export default function CoursesCards({
  icon,
  title,
  rating,
  user,
  userName,
  lecture,
  styls,
}: CardProps) {
  return (
    <div
      className={`card p-6 bg-white h-auto md:h-[460px] flex flex-col justify-between ${styls} `}
    >
      {/* upper */}
      <div className="flex gap-5 mb-8">
        {/* icon */}
        <div className="">
          <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-myblue">
            {icon}
          </div>
        </div>
        {/* text-side */}
        <div className="text-start">
          <h2 className="text-2xl xl:text-3xl font-semibold w-full md:w-[90%] xl:w-[80%] ">
            {title}
          </h2>

          {/* ⭐ Dynamic Rating */}
          <div className="flex items-center gap-1 my-4">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                aria-label="rating stars icon"
                key={i}
                className={i < rating ? "text-myblue" : "text-gray-300"}
              />
            ))}
            <span className="text-sm text-myblue ml-1">({rating}.0)</span>
          </div>

          {/* user */}
          <div className="flex items-center gap-2">
            <Image
              src={user}
              alt={userName}
              className=" rounded-full overflow-hidden object-center object-cover"
              width={30}
              height={30}
            />
            <p className="text-gray-400 font-semibold">{userName}</p>
          </div>

          {/* lecture details */}
          <p className="text-myblue text-sm mt-2">{lecture}</p>
        </div>
      </div>

      {/* btns */}
      <div className="">
        <a
          href="#"
          aria-label="$100 All Course / $15 per month"
          className="block w-full py-4 rounded-sm bg-gray-50 text-myblue font-medium mb-3 text-center"
        >
          $100 All Course / $15 per month
        </a>
        <a
          href="#"
          aria-label="ENROLL NOW"
          className="block w-full py-4 text-center rounded-sm border-1 border-myblue text-myblue font-medium hover:bg-myblue hover:text-white transition-all duration-300"
        >
          ENROLL NOW!
        </a>
      </div>
    </div>
  );
}
