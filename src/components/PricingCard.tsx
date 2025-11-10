"use client";

import { FC } from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
}

const PricingCard: FC<PricingCardProps> = ({ plan, price, description }) => {
  return (
    <article
      className="flex flex-col items-center justify-between text-center bg-white shadow-md border border-gray-100 
                 p-10 min-h-[460px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus-within:-translate-y-2 
                 focus-within:shadow-xl outline-none"
      tabIndex={0}
    >
      {/* Plan title */}
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-6">
        {plan}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <span className="text-gray-500 text-2xl align-top">$</span>
        <span className="text-5xl font-extrabold text-myblue">{price}K</span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xs">
        {description}
      </p>

      {/* Button */}
      <button
        className="border border-teal-500 text-myblue font-semibold uppercase tracking-wide text-sm py-3 px-8 lg:px-4 xl:px-8 rounded-md 
                   hover:bg-myblue hover:text-white transition-colors duration-300 focus:ring-2 focus:ring-offset-2 
                   focus:ring-teal-500"
        aria-label={`Get started with ${plan}`}
      >
        Get Started
      </button>
    </article>
  );
};

export default PricingCard;
