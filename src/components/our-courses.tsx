"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import CoursesCards from "./courses_cards";
import { CardData } from "./data/carddata";

export default function OurCourses() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
        }}
      >
        {/* ✅ Map each card into its own SwiperSlide */}
        {CardData.map((data, index) => (
          <SwiperSlide key={index}>
            <CoursesCards
              icon={data.icon}
              title={data.title}
              rating={data.rating}
              user={data.user}
              userName={data.userName}
              lecture={data.lecture}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
