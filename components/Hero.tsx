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
      className="relative min-h-screen bg-gradient-to-br from-[#0a5555] to-[#0D6E6E] overflow-hidden pt-20"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <span className="text-xl">🐾</span>
              <span className="text-sm font-medium">
                Chennai's Trusted Pet Care
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Expert Care for Your Beloved Pets
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Dr. Vairamuthu and team provide compassionate, specialist
              veterinary care in Perambur, Chennai.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="https://wa.me/919600103135?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20pet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F4A940] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e09830] transition-all hover:scale-105 shadow-lg"
              >
                Book Appointment
              </a>
              <a
                href="tel:+919600103135"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0D6E6E] transition-all"
              >
                Call Now: 96001 03135
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-white/90"
            >
              <div className="flex text-[#F4A940]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 4 ? "" : "opacity-50"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="font-semibold">4.5</span>
              <span>· 280+ Reviews</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">
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
              className="absolute top-24 left-0 w-56 h-72 rounded-3xl overflow-hidden shadow-2xl z-10"
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
              className="absolute bottom-8 right-32 w-44 h-52 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400"
                alt="Adorable puppy"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating cards */}
            <motion.div
              animate={floatAnimation}
              className="absolute top-8 left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20"
            >
              <span className="text-3xl">⭐</span>
              <div>
                <div className="font-bold text-[#0D6E6E] text-xl">4.5 ★</div>
                <div className="text-xs text-[#6B7280]">Rating</div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                },
              }}
              className="absolute bottom-20 left-12 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20"
            >
              <span className="text-3xl">🕐</span>
              <div>
                <div className="font-bold text-[#0D6E6E]">10 AM – Open Now</div>
                <div className="text-xs text-[#6B7280]">Mon–Sat</div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                },
              }}
              className="absolute top-1/3 right-4 bg-[#F4A940] text-white rounded-2xl shadow-xl p-4 z-20"
            >
              <div className="font-bold text-lg">🚨 Emergency Care</div>
              <div className="text-sm opacity-90">Available</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
