"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatProps {
  icon: string;
  value: string;
  label: string;
  delay: number;
  useWhitePaw?: boolean;
}

function AnimatedStat({ icon, value, label, delay, useWhitePaw }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Extract number from value string (e.g., "500+" -> 500)
  const targetNumber = parseInt(value.replace(/\D/g, "")) || 0;
  const hasPlus = value.includes("+");
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (isInView && targetNumber > 0) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = targetNumber / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center text-white"
    >
      {useWhitePaw ? (
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-white mb-2"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8.5 3C7.67 3 7 3.67 7 4.5S7.67 6 8.5 6 10 5.33 10 4.5 9.33 3 8.5 3zm7 0C14.67 3 14 3.67 14 4.5S14.67 6 15.5 6 17 5.33 17 4.5 16.33 3 15.5 3zM5 7.5C4.17 7.5 3.5 8.17 3.5 9s.67 1.5 1.5 1.5S6.5 9.83 6.5 9 5.83 7.5 5 7.5zm14 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-7 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
        </svg>
      ) : (
        <span className="text-3xl md:text-4xl mb-2">{icon}</span>
      )}
      <div className="text-xl md:text-2xl font-bold mb-1">
        {isDecimal ? value : `${count}${hasPlus ? "+" : ""}`}
      </div>
      <div className="text-xs md:text-sm opacity-90">{label}</div>
    </motion.div>
  );
}

export default function TrustBar() {
  const stats = [
    { icon: "🐾", value: "500+", label: "Pets Treated", useWhitePaw: true },
    { icon: "⭐", value: "4.5", label: "Google Rating", useWhitePaw: false },
    { icon: "📅", value: "10AM–9PM", label: "Mon–Sat", useWhitePaw: false },
    {
      icon: "🏥",
      value: "Specialist",
      label: "Veterinary Care",
      useWhitePaw: false,
    },
  ];

  return (
    <section className="bg-[#0D6E6E] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
              useWhitePaw={stat.useWhitePaw}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
