"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import CoursesCards from "../components/courses_cards";

// images
import userImg1 from "../../public/Images/person_1.webp";
import userImg2 from "../../public/Images/person_2.webp";
import userImg3 from "../../public/Images/person_3.webp";

// icons
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { TbDeviceDesktopCog } from "react-icons/tb";

export default function App() {
  const cardData = [
    {
      icon: <FaLaptopCode className="text-white text-3xl" />,
      title: "HTML, CSS, and Javascript for Web Developers",
      rating: 5,
      user: userImg1,
      userName: "John Smith",
      lecture: "50 lectures (190 hrs)",
    },
    {
      icon: <CgWebsite className="text-white text-3xl" />,
      title: "Introducing to Programming with WordPress",
      rating: 4,
      user: userImg2,
      userName: "Sarah Lee",
      lecture: "Advanced Topics (120)",
    },
    {
      icon: <TbDeviceDesktopCog className="text-white text-3xl" />,
      title: "Basic Fundamentals for Software Engineering",
      rating: 3,
      user: userImg3,
      userName: "Michael Brown",
      lecture: "Frontend Basics (85)",
    },
    {
      icon: <FaLaptopCode className="text-white text-3xl" />,
      title: "HTML, CSS, and Javascript for Web Developers",
      rating: 5,
      user: userImg1,
      userName: "John Smith",
      lecture: "50 lectures (190 hrs)",
    },
    {
      icon: <CgWebsite className="text-white text-3xl" />,
      title: "Introducing to Programming with WordPress",
      rating: 4,
      user: userImg2,
      userName: "Sarah Lee",
      lecture: "Advanced Topics (120)",
    },
    {
      icon: <TbDeviceDesktopCog className="text-white text-3xl" />,
      title: "Basic Fundamentals for Software Engineering",
      rating: 3,
      user: userImg3,
      userName: "Michael Brown",
      lecture: "Frontend Basics (85)",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* ✅ Map each card into its own SwiperSlide */}
        {cardData.map((data, index) => (
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
