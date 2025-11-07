import PagesHeader from "@/components/pages-header";
import React from "react";
import Footer from "@/components/footer";
import AboutSec from "@/components/about-sec";

export default function About() {
  return (
    <main>
      <PagesHeader title=" About Us" />

      {/* about section */}
      <AboutSec />

      {/* testimonial */}

      {/* footer */}
      <Footer />
    </main>
  );
}
