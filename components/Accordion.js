'use client'

import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
      <button
        type="button"
        className={`toggle-button p-6 w-full text-base text-left text-gray-800 flex items-center ${
          isOpen ? "font-semibold" : ""
        }`}
        onClick={toggleAccordion}
      >
        <span className="mr-4">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42 42"
          className="w-3 fill-current ml-auto shrink-0"
        >
          <path
            className={`plus ${isOpen ? "hidden" : "block"}`}
            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
          />
          <path
            d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
          />
        </svg>
      </button>
      <div
        className={`content px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? "pb-6" : "invisible max-h-0"
        }`}
        style={{ maxHeight: isOpen ? "1000px" : "0px" }}
      >
        <p className="text-sm text-gray-500">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;