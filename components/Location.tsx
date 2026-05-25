"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hours = [
    { days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { days: "Sunday", time: "10:30 AM – 1:30 PM" },
  ];

  return (
    <section id="contact" ref={ref} className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4">
            Visit Our Clinic
          </h2>
          <div className="w-24 h-1 bg-[#F4A940] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=Krishna+Pet+Speciality+Clinic+Perambur+Chennai&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krishna Pet Speciality Clinic Location"
            ></iframe>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0D6E6E] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
                    Address
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    B, 125/1, Karthikeyan Rd, Periyar Nagar West,
                    <br />
                    Perambur, Chennai, Tamil Nadu 600082
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0D6E6E] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
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
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
                    {hours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-[#F9F7F4] px-4 py-3 rounded-lg"
                      >
                        <span className="font-medium text-[#1C1C1E]">
                          {schedule.days}
                        </span>
                        <span className="text-[#0D6E6E] font-semibold">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0D6E6E] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+919600103135"
                    className="text-2xl font-bold text-[#0D6E6E] hover:text-[#0a5555] transition-colors"
                  >
                    +91 96001 03135
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://www.google.com/maps/dir//Krishna+Pet+Speciality+Clinic,+B,+125%2F1,+Karthikeyan+Rd,+Periyar+Nagar+West,+Perambur,+Chennai,+Tamil+Nadu+600082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F4A940] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e09830] transition-all hover:scale-105 shadow-lg text-center"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
