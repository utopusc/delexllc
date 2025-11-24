"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function ServicesPage() {
  const services = [
    {
      title: "Dry Van Transportation",
      description:
        "Our dry van services provide secure, weather-protected transport for a wide range of goods. We accommodate both full truckload (FTL) and less-than-truckload (LTL) shipments.",
      features: [
        "53-foot trailers for maximum capacity",
        "Full and partial (LTL) loads",
        "Secure loading and unloading",
        "Real-time GPS tracking",
      ],
      image: "/images/main.jpg",
    },
    {
      title: "Refrigerated Freight",
      description:
        "Temperature-controlled transportation for perishable goods and pharmaceuticals. We ensure product integrity from pickup to delivery. Full truckload only.",
      features: [
        "Multi-temperature zones",
        "Continuous temperature monitoring",
        "FDA-compliant handling",
        "Full truckload (FTL) only",
      ],
      image: "/images/5.jpeg",
    },
  ];

  const serviceRoute = [
    "New Jersey",
    "Pennsylvania",
    "Maryland",
    "Virginia",
    "North Carolina",
    "South Carolina",
    "Georgia",
    "Florida",
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Get a Quote",
      description: "Contact us with your shipping details",
    },
    {
      step: "2",
      title: "Schedule Pickup",
      description: "Choose a convenient pickup time",
    },
    {
      step: "3",
      title: "Track Shipment",
      description: "Monitor your cargo in real-time",
    },
    {
      step: "4",
      title: "Delivery",
      description: "On-time delivery to your destination",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Specialized trucking solutions for the East Coast, delivered with the care of a family-owned business
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide flexible freight solutions to meet your unique shipping
              requirements. Whether you need dry van or temperature-controlled
              transport, we deliver on time, every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-20 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "md:order-2" : ""}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "md:order-1" : ""}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Area
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              We specialize in freight transportation along the East Coast corridor,
              serving major markets from New Jersey to Florida.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
            {serviceRoute.map((state, index) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors">
                  {state}
                </div>
                {index < serviceRoute.length - 1 && (
                  <svg
                    className="w-8 h-8 text-blue-600 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Getting started with Delex is simple. Follow these four easy steps
              to ship your freight with confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Request a free rate quote and discover how our family operation can
              streamline your shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quote" className="w-full sm:w-auto">
                <ShimmerButton
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  shimmerDuration="2s"
                  background="rgba(255, 255, 255, 0.1)"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 border-2 border-white"
                >
                  Get a Quote
                </ShimmerButton>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
