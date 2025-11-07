import PagesHeader from "@/components/pages-header";
import React from "react";
import Footer from "@/components/footer";
import AboutSec from "@/components/about-sec";
import Testimonial from "@/components/testimonial";

export default function About() {
  return (
    <main>
      <PagesHeader title=" About Us" />

      {/* about section */}
      <AboutSec />

      {/* testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Testimonial />
        </div>
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
}
