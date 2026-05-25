"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatProps {
  icon: string;
  value: string;
  label: string;
  delay: number;
}

function AnimatedStat({ icon, value, label, delay }: StatProps) {
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
      className="flex items-center gap-3 text-white"
    >
      <span className="text-4xl">{icon}</span>
      <div>
        <div className="text-2xl md:text-3xl font-bold">
          {isDecimal ? value : `${count}${hasPlus ? "+" : ""}`}
        </div>
        <div className="text-sm md:text-base opacity-90">{label}</div>
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  const stats = [
    { icon: "🐾", value: "500+", label: "Pets Treated" },
    { icon: "⭐", value: "4.5", label: "Google Rating" },
    { icon: "📅", value: "10AM–9PM", label: "Mon–Sat" },
    { icon: "🏥", value: "Specialist", label: "Veterinary Care" },
  ];

  return (
    <section className="bg-[#0D6E6E] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
