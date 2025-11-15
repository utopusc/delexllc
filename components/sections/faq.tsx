"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of freight do you transport?",
      answer:
        "We specialize in dry van freight (full and partial loads) and refrigerated goods (full truckload only). Our modern fleet is equipped to handle a wide variety of cargo within these categories.",
    },
    {
      question: "How quickly can you provide a rate quote?",
      answer:
        "We typically provide competitive rate quotes within 24 hours of receiving your request. For urgent shipments, we can often provide quotes within a few hours during business hours.",
    },
    {
      question: "Do you offer real-time tracking?",
      answer:
        "Yes! All our shipments include real-time GPS tracking so you can monitor your cargo's location and estimated arrival time at any moment.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We provide dedicated trucking services along the East Coast. Our primary service route covers: New Jersey → Pennsylvania → Maryland → Virginia → North Carolina → South Carolina → Georgia → Florida.",
    },
    {
      question: "Is my cargo insured during transport?",
      answer:
        "Absolutely. All shipments are covered by comprehensive cargo insurance. We can also arrange additional coverage for high-value items upon request.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We offer flexible payment terms for established customers. New customers typically pay upon delivery or can arrange net-15 terms after credit approval.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our trucking services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
