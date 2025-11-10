import Accordion from "@/components/Accordion";
import Footer from "@/components/footer";
import PagesHeader from "@/components/pages-header";
import PricingCard from "@/components/PricingCard";
import React from "react";

export default function Pricing() {
  const plans = [
    {
      plan: "Basic Plan",
      price: "49",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      plan: "Beginner Plan",
      price: "79",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      plan: "Premium Plan",
      price: "109",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      plan: "Ultimate Plan",
      price: "149",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  const accordionItems = [
    {
      title: "How to Enroll This Online Courses?",
      content:
        "This is the first item's accordion body. It is hidden by default until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
    {
      title: "Where It is hidden by default, until the collapse?",
      content:
        "This section remains collapsed until you click on the header above. Perfect for FAQs or course details.",
    },
    {
      title: "How It is hidden by default, until the collapse?",
      content:
        "You can add as many sections as you want. The transitions are smooth and optimized for best performance.",
    },
  ];

  return (
    <main>
      <PagesHeader title="Choose The Right Plan" />

      {/* Pricing Cards */}
      <section className="pt-20 pb-10 xl:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <PricingCard
                key={p.plan}
                plan={p.plan}
                price={p.price}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg text-myblue uppercase font-bold mb-2">
              FAQs
            </h3>
            <h1 className="text-4xl lg:text-5xl text-[#1e1e1e] font-semibold mb-10 lg:mb-20">
              Frequently Asked Questions
            </h1>
          </div>
          <Accordion items={accordionItems} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
