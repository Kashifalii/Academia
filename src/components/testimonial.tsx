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
      userName: "William Smith",
      title: "Software Engineer",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      user: userImg3,
      userName: "John Doe",
      title: "Web Developer",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      user: userImg1,
      userName: "nick wellson",
      title: "UI/UX Designer",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
  ];

  console.log(cardData.length);

  return (
    <section>
      {/* heading */}
      <div className="text-center">
        <h6 className="text-lg text-myblue uppercase font-bold mb-2">
          Testimonial
        </h6>
        <h1 className="text-4xl lg:text-5xl text-[#1e1e1e] font-semibold lg:mb-20 mb-14">
          Our Successful Students
        </h1>
      </div>

      {/* swiper */}

      <div className="testimonial relative">
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
          onSlideChange={(swiper) =>
            setActiveIndex(
              swiper.realIndex === cardData.length - 1
                ? 0
                : swiper.realIndex + 1
            )
          }
        >
          {cardData.map((data, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide
                key={index}
                className="flex justify-center h-[500px] py-2"
              >
                <div
                  className={`md:max-w-[480px] w-full h-auto py-6 px-8 shadow-md transition-all duration-500  ${
                    isActive
                      ? "bg-myblue scale-105 text-white"
                      : "bg-white scale-100 text-myblack"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={data.user}
                      alt={data.userName}
                      className="w-[80px] h-[80px] rounded-full object-cover"
                    />
                    <div>
                      <h3
                        className={`text-xl font-bold uppercase mb-2 ${
                          isActive ? "text-white" : "text-myblack"
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
      </div>
    </section>
  );
}
