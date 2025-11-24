"use client";

import Link from "next/link";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Delex fleet */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main.jpg"
          alt="Delex LLC trucks"
          fill
          className="object-cover object-[28%_50%] md:object-center"
          priority
          quality={75}
          sizes="100vw"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-black/70 to-black/50 md:from-black/80 md:via-black/60 md:to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start mb-4 md:mb-6"
          >
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-semibold">
              20+ Years of Trucking Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-center md:text-left"
          >
            Professional Trucking Services You Can{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Trust
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed text-center md:text-left max-w-2xl mx-auto md:mx-0"
          >
            With over 20 years of industry expertise, we deliver excellence
            along the East Coast with reliable, on-time freight solutions.
            Your trusted partner from New Jersey to Florida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <Link href="/quote" className="w-full sm:w-auto">
              <ShimmerButton
                shimmerColor="#3b82f6"
                shimmerSize="0.1em"
                shimmerDuration="2s"
                background="linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold"
              >
                Get Free Quote
              </ShimmerButton>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold">
                Our Services
              </button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/20 justify-center md:justify-start"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400"
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
              <div>
                <p className="text-white font-bold text-lg sm:text-xl">100%</p>
                <p className="text-gray-300 text-xs sm:text-sm">On-Time Delivery</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg sm:text-xl">Fully</p>
                <p className="text-gray-300 text-xs sm:text-sm">Insured Fleet</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg sm:text-xl">24/7</p>
                <p className="text-gray-300 text-xs sm:text-sm">Always Reachable</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
