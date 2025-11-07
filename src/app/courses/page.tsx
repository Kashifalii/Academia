import PagesHeader from "@/components/pages-header";
import React from "react";
import { CardData } from "@/components/data/carddata";
import CoursesCards from "@/components/courses_cards";
import AllCourses from "@/components/all-courses";
import Footer from "@/components/footer";

export default function Courses() {
  return (
    <main>
      <PagesHeader title=" Explore Courses We Offer" />

      {/* courses-card */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="flex justify-between flex-wrap gap-y-6">
            {CardData.map((data, index) => (
              <CoursesCards
                key={index}
                icon={data.icon}
                title={data.title}
                rating={data.rating}
                user={data.user}
                userName={data.userName}
                lecture={data.lecture}
                styls="w-full md:w-[48%] lg:w-[32%]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* all courses */}
      <AllCourses />

      {/* footer */}
      <Footer />
    </main>
  );
}
