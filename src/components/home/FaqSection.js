
"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Why do I need a VPN?",
    answer:
      "GShield provides enhanced security, privacy, and unrestricted internet access. With our advanced encryption, no-logs policy, and global server network, you can browse securely and bypass geo-restrictions with ease.",
  },
  {
    question: "How does GShield protect my data?",
    answer:
      "We use advanced encryption protocols and secure tunneling to ensure your data is protected during transmission.",
  },
  {
    question: "Does GShield run when the app is closed?",
    answer:
      "Yes, if you enable the auto-connect option, GShield runs in the background and connects automatically.",
  },
  {
    question: "Can I use the GShield app abroad?",
    answer:
      "Absolutely! GShield works globally so you can maintain secure access wherever you go.",
  },
  {
    question: "Can I use your VPN on multiple devices?",
    answer:
      "Yes, one GShield account allows connection on multiple devices simultaneously.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white text-black">
      <div className="text-center mb-12">
        <span className="bg-green-100 text-green-600 text-sm font-semibold px-4 py-1 rounded-full">
          Faqs
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-sm border-gray-100 mb-4 transition-all duration-300 overflow-hidden ${
              openIndex === index ? "bg-green-600 text-white" : "bg-gray-100 text-black"
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center font-medium focus:outline-none"
            >
              <div className="font-Manrope font-bold">

              {faq.question}
              </div>
              <span className="ml-2">
                {openIndex === index ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 font-Poppins text-black text-base font-normal text-black bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
