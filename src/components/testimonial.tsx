"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import userImg1 from "../../public/Images/person_1.webp";
import userImg2 from "../../public/Images/person_2.webp";
import userImg3 from "../../public/Images/person_3.webp";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardData = [
    {
      user: userImg1,
      userName: "Roger Scott",
      title: "Marketing Manager",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      user: userImg2,
      userName: "Roger Scott",
      title: "Marketing Manager",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      user: userImg3,
      userName: "Roger Scott",
      title: "Marketing Manager",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      user: userImg1,
      userName: "Roger Scott",
      title: "Marketing Manager",
      para: "Another testimonial text just to ensure smooth looping.",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper pb-10"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {cardData.map((data, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`max-w-[480px] w-full h-auto p-6 shadow-md transition-all duration-500 rounded-lg ${
                  isActive
                    ? "bg-myblue scale-105 text-white"
                    : "bg-white scale-100 text-black"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={data.user}
                    alt={data.userName}
                    className="w-[100px] h-[100px] rounded-full object-cover"
                  />
                  <div>
                    <h3
                      className={`text-2xl font-semibold my-4 ${
                        isActive ? "text-white" : "text-black"
                      }`}
                    >
                      {data.userName}
                    </h3>
                    <p
                      className={`${
                        isActive ? "text-white/90" : "text-gray-500"
                      }`}
                    >
                      {data.title}
                    </p>
                  </div>
                </div>
                <p
                  className={`mt-4 leading-relaxed ${
                    isActive ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {data.para}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* ✅ Custom Tailwind Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 30px;
          height: 4px;
          border-radius: 0;
          background: #e5e7eb; /* gray-300 */
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #009beb; /* your myblue color */
          width: 40px;
        }
        .swiper-pagination {
          bottom: 0 !important;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }
      `}</style>
    </div>
  );
}
