"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  rating: number;
  user: StaticImageData;
  userName: string;
  lecture: string;
};

export default function CoursesCards({
  icon,
  title,
  rating,
  user,
  userName,
  lecture,
}: CardProps) {
  return (
    <div className="card p-6 bg-white">
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
          <h2 className="text-3xl font-semibold w-[80%] ">{title}</h2>

          {/* ⭐ Dynamic Rating */}
          <div className="flex items-center gap-1 my-4">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-myblue" : "text-gray-300"}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">({rating}.0)</span>
          </div>

          {/* user */}
          <div className="flex items-center gap-2">
            <Image
              src={user}
              alt={userName}
              className="w-[30px] h-[30px] rounded-full overflow-hidden object-center object-cover"
            />
            <p>{userName}</p>
          </div>

          {/* lecture details */}
          <p>{lecture}</p>
        </div>
      </div>

      {/* btns */}
      <div className="">
        <a
          href="#"
          className="block w-full py-4 rounded-sm bg-gray-50 text-myblue font-medium mb-3"
        >
          $100 All Course / $15 per month
        </a>
        <a
          href="#"
          className="block w-full py-4 rounded-sm border-1 border-myblue text-myblue font-medium hover:bg-myblue hover:text-white transition-all duration-300"
        >
          ENROLL NOW!
        </a>
      </div>
    </div>
  );
}
