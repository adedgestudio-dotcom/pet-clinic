"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    "Accurate diagnosis with clear explanations",
    "Compassionate care — treats every pet like family",
    "Clean, well-maintained clinic environment",
    "Emergency support for critical cases (Parvo, high fever etc.)",
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=700"
                alt="Veterinarian with pet"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F4A940] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0D6E6E] rounded-full opacity-20 blur-3xl"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6">
              Why Pet Parents Trust Dr. Vairamuthu
            </h2>
            <div className="w-24 h-1 bg-[#F4A940] mb-8"></div>

            <div className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#0D6E6E] rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-[#1C1C1E]">{reason}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-[#F9F7F4] border-l-4 border-[#F4A940] p-6 rounded-r-2xl mb-8"
            >
              <p className="text-[#1C1C1E] italic mb-2">
                "The doctor is patient, knowledgeable, and explains the
                treatment clearly."
              </p>
              <p className="text-sm text-[#6B7280]">— Google Review</p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="inline-block bg-[#0D6E6E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0a5555] transition-all hover:scale-105 shadow-lg"
            >
              Meet the Doctor
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
