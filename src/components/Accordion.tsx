"use client";

import { useState, FC } from "react";
import { IoChevronUp } from "react-icons/io5";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto bg-white border border-gray-200 rounded-md shadow-sm">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-0">
          <button
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            className={`w-full flex justify-between items-center px-5 py-4 text-left font-semibold transition-all duration-200 ${
              openIndex === index
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-900 hover:bg-gray-50"
            }`}
          >
            {item.title}
            <IoChevronUp
              className={`text-xl transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 py-4 text-gray-600 text-sm bg-gray-50">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
