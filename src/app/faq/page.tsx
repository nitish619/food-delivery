"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Download the Bella Onoje app, create an account, and select your favorite dishes. Add them to your cart and proceed to checkout for fast delivery.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "We deliver to all locations listed in the app. Enter your address at checkout to confirm delivery availability.",
  },
  {
    question: "Can I customize my meal?",
    answer:
      "Yes! Use the special instructions option in the app to request custom ingredients or remove items from your order.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit/debit cards, UPI, and select wallets. Payment options are shown at checkout.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach support via our contact form or email listed on the Contact page.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div className="bg-[url('/your-hero-image.jpg')] bg-cover py-16 flex items-center justify-center">
        <div className="bg-white/80 p-8 rounded-xl shadow-lg max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="mb-4 text-gray-700">
            Find quick answers about ordering, delivery, and more.
          </p>
        </div>
      </div>
      {/* FAQ Accordion */}
      <main className="flex flex-col items-center py-5 px-4">
        <div className="bg-white rounded-xl shadow-lg shadow-[#FA4A0C]/30 w-full max-w-2xl divide-y">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="py-4 px-6">
              <button
                onClick={() => handleToggle(idx)}
                className={`flex justify-between w-full text-lg font-semibold py-2 outline-none transition hover:text-orange-600 ${
                  openIndex === idx ? "text-primary" : ""
                }`}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-${idx}`}
              >
                {faq.question}
                <span>
                  {openIndex === idx ? (
                    <svg
                      width={16}
                      height={16}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M4 10l4-4 4 4" />
                    </svg>
                  ) : (
                    <svg
                      width={16}
                      height={16}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                id={`faq-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx
                    ? "max-h-32 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
                style={{
                  transitionProperty: "max-height, opacity, margin-top",
                }}
              >
                <div className="text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
