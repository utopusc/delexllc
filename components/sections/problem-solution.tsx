"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "No more missed deadlines or delayed shipments",
    "Transparent pricing with no hidden fees",
    "Professional handling of your valuable cargo",
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                Common Challenges
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Struggling with Unreliable Freight Services?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Late deliveries, damaged cargo, and unpredictable costs can hurt
              your business. You need a trucking partner that understands the
              importance of reliability and professionalism.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/6.jpeg.webp"
                alt="Frustrated businessman"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Our Solution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              We Eliminate These Frustrations
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Delex LLC, we eliminate these frustrations. As a family-owned
              business, our commitment to excellence, transparent pricing, and
              proven track record of on-time deliveries is personal.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-800 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
