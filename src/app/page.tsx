"use client"
import Card from "@/components/card";
import Navbar from "@/components/navbar";
import React from "react";

export default function Home() {

  const cardDetails = [
    {
      logo: "mkcdcmdk",
      title: "Kitchen Foil",
      paragraph: "Perfect for cooking, wrapping, and food preservation."
    },
    {
      logo: "mkcdcmdk",
      title: "Kitchen Foil",
      paragraph: "Perfect for cooking, wrapping, and food preservation."
    },
    {
      logo: "mkcdcmdk",
      title: "Kitchen Foil",
      paragraph: "Perfect for cooking, wrapping, and food preservation."
    }
  ]

  return (
    <>
      <Navbar />
      <section className="text-2xl flex justify-between">
        {cardDetails.map((item, index) => <Card key={index} title={item.title} paragraph={item.paragraph} />)}
      </section>
    </>
  );
}
