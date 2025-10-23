import Image from "next/image";
import React from "react";
import aboutImg from "../../public/Images/about.webp";

import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { BsPersonCheck } from "react-icons/bs";

export default function About() {
  const aboutData = [
    {
      icon: (
        <LiaChalkboardTeacherSolid className="text-6xl xs:text-8xl text-myblue h-fit w-fit group-hover:text-white" />
      ),
      title: "Online Courses",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: (
        <GrCertificate className="text-6xl xs:text-8xl text-myblue h-fit w-fit group-hover:text-white" />
      ),
      title: "Earn A Certificates",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: (
        <BsPersonCheck className="text-6xl xs:text-8xl text-myblue h-fit w-fit group-hover:text-white" />
      ),
      title: "Learn with Expert",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between flex-wrap gap-8 lg:gap-0">
          {/* image side */}
          <div className="w-full lg:w-[49%] h-[500px] lg:h-[800px] xs:block hidden">
            <Image
              src={aboutImg}
              alt="about person image"
              className="w-full h-full object-cover object-top"
            ></Image>
          </div>
          {/* cards side */}
          <div className="w-full lg:w-[49%]">
            <h5 className="text-myblue uppercase text-lg font-bold mb-2">
              Learn Anything
            </h5>
            <h1 className="text-3xl xs:text-4xl xl:text-5xl font-bold text-[#1e1e1e] w-full sm:w-[80%] leading-none">
              Benefits About Online Learning Expertise
            </h1>

            {/* cards */}
            <div className="card-wrapper mt-15 flex flex-col gap-4">
              {aboutData.map((item, index) => (
                // card
                <div
                  key={index}
                  className="bg-white w-full p-6 flex flex-col xs:flex-row  items-start gap-4 group hover:bg-myblue transition-all duration-300"
                >
                  {item.icon}
                  <div>
                    <h1 className="card-title text-xl font-medium mb-2.5 group-hover:text-white">
                      {item.title}
                    </h1>
                    <p className="card-para text-gray-500 group-hover:text-white">
                      {item.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
