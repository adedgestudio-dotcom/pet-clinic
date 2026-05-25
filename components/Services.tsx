"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group"
    >
      <div className="w-16 h-16 bg-[#0D6E6E] rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#1C1C1E] mb-3 group-hover:text-[#0D6E6E] transition-colors">
        {title}
      </h3>
      <div className="w-12 h-1 bg-[#F4A940] mb-3 group-hover:w-20 transition-all"></div>
      <p className="text-[#6B7280] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: "🐶",
      title: "Dogs & Puppies",
      description:
        "Vaccinations, deworming, general health checkups and preventive care for your canine companions.",
    },
    {
      icon: "🐱",
      title: "Cats & Kittens",
      description:
        "Specialist feline care including nutrition counseling, vaccinations and health monitoring.",
    },
    {
      icon: "🦜",
      title: "Birds & Exotic Pets",
      description:
        "Expert care for cockatiels, parrots, rabbits and other small animals with specialized knowledge.",
    },
    {
      icon: "💉",
      title: "Vaccinations",
      description:
        "Complete immunization schedules for all pets following international veterinary standards.",
    },
    {
      icon: "🩺",
      title: "Emergency Care",
      description:
        "Urgent care for fever, vomiting, infections, Parvo virus and other critical conditions.",
    },
    {
      icon: "🧪",
      title: "Diagnostics",
      description:
        "Blood tests, health checkups, and comprehensive diagnostic services for accurate treatment.",
    },
  ];

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-20 bg-[#F9F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4">
            What We Treat
          </h2>
          <div className="w-24 h-1 bg-[#F4A940] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
