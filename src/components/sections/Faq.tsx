"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What areas do you cover? / Where are you based?",
    answer: "We are based in Palma de Mallorca, just steps from the Paseo Marítimo and Palma's leading marinas. We work across the Balearic Islands, the Mediterranean, and internationally for the right projects.",
  },
  {
    question: "Do you work on boats already in use or only new builds?",
    answer: "We work on both. Our Marine Refit & Upgrades service is specifically designed for existing yachts looking to modernise their technology, lighting, or shading systems — with minimal disruption to onboard life.",
  },
  {
    question: "Which brands and systems do you work with?",
    answer: "We work with industry-leading platforms including Crestron, Lutron, and L-Acoustics, among others. Our solutions are brand-agnostic where possible, always selecting the best technology for each specific project.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes. We offer comprehensive service and support packages covering on-site and remote assistance, ensuring every system we install continues to perform flawlessly over time.",
  },
  {
    question: "Can you work with our existing captain / crew / project manager?",
    answer: "Absolutely. We regularly collaborate with captains, crew, interior designers, and project managers. Clear communication and minimal disruption are central to how we work.",
  },
  {
    question: "How long does a typical marine AV integration project take?",
    answer: "It depends on the scope. A focused refit can take a few days, while a full new build integration may span several months. We always provide a detailed project timeline before work begins.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="text-[#005671] text-xs font-semibold tracking-widest uppercase mb-4">
          FAQ
        </p>

        <h2 className="text-gray-900 text-3xl md:text-4xl font-light leading-tight mb-16 max-w-xl">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-gray-200 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex items-center justify-between py-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-gray-900 text-base font-light pr-8">
                  {faq.question}
                </span>
                <span className="text-[#005671] text-xl flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}