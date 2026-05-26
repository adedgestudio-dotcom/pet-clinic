"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Floating animation for cards
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  // Stagger container for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-0 md:min-h-screen bg-linear-to-br from-[#0a5555] to-[#0D6E6E] overflow-hidden pt-20 w-full"
    >
      {/* Floating paw prints background decoration */}
      <div className="absolute inset-0 opacity-5">
        {[
          { left: 10, top: 15 },
          { left: 25, top: 45 },
          { left: 40, top: 25 },
          { left: 55, top: 65 },
          { left: 70, top: 35 },
          { left: 85, top: 55 },
          { left: 15, top: 75 },
          { left: 30, top: 85 },
          { left: 60, top: 10 },
          { left: 75, top: 80 },
          { left: 5, top: 50 },
          { left: 50, top: 90 },
          { left: 90, top: 20 },
          { left: 20, top: 60 },
          { left: 65, top: 40 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 pb-8 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.5 3C7.67 3 7 3.67 7 4.5S7.67 6 8.5 6 10 5.33 10 4.5 9.33 3 8.5 3zm7 0C14.67 3 14 3.67 14 4.5S14.67 6 15.5 6 17 5.33 17 4.5 16.33 3 15.5 3zM5 7.5C4.17 7.5 3.5 8.17 3.5 9s.67 1.5 1.5 1.5S6.5 9.83 6.5 9 5.83 7.5 5 7.5zm14 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-7 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
              </svg>
              <span className="text-sm font-medium">
                Chennai's Trusted Pet Care
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            >
              Expert Care for Your Beloved Pets
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed"
            >
              Dr. Vairamuthu and team provide compassionate, specialist
              veterinary care in Perambur, Chennai.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <a
                href="https://wa.me/919444182357?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20pet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#F4A940] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e09830] transition-[background-color,transform] duration-200 ease-in-out hover:scale-105 shadow-lg text-center will-change-transform"
              >
                Book Appointment
              </a>
              <a
                href="tel:+919600103135"
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0D6E6E] transition-[background-color,color,transform] duration-200 ease-in-out hover:scale-105 text-center will-change-transform"
              >
                Call Now: 96001 03135
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 text-white/90 text-sm md:text-base"
            >
              <div className="flex text-[#F4A940]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 4 ? "" : "opacity-50"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="font-semibold">4.5</span>
              <span className="text-white/70">·</span>
              <span>280+ Reviews</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded">
                Google verified
              </span>
            </motion.div>
          </motion.div>

          {/* Right side - Images and floating cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main pet images - repositioned for better layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-0 right-0 w-72 h-80 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600"
                alt="Happy dog"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-20 left-0 w-56 h-72 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600"
                alt="Cute cat"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute bottom-8 right-24 w-44 h-52 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400"
                alt="Adorable puppy"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating cards - redesigned with better alignment */}
            {/* Rating Card - Top Left */}
            <motion.div
              animate={floatAnimation}
              className="absolute -top-4 left-4 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4 z-20 border border-[#F4A940]/30 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-linear-to-br from-[#F4A940] to-[#e09830] rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-[#0D6E6E] text-2xl leading-none mb-1.5">
                  4.5
                </div>
                <div className="text-sm text-[#6B7280] font-medium">
                  280+ Reviews
                </div>
              </div>
            </motion.div>

            {/* Hours Card - Bottom Left */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                },
              }}
              className="absolute bottom-16 left-8 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4 z-20 border border-[#0D6E6E]/30 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-linear-to-br from-[#0D6E6E] to-[#0a5555] rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-[#0D6E6E] text-lg leading-none mb-1.5">
                  Open Now
                </div>
                <div className="text-sm text-[#6B7280] font-medium">
                  10 AM – 8 PM
                </div>
              </div>
            </motion.div>

            {/* Emergency Card - Right Side */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                },
              }}
              className="absolute top-1/3 -right-4 bg-linear-to-br from-[#F4A940] to-[#e09830] text-white rounded-2xl shadow-2xl p-5 z-20 border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-lg leading-none mb-1.5">
                    Emergency
                  </div>
                  <div className="text-sm opacity-90 font-medium">
                    24/7 Available
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
