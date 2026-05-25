"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ReviewCardProps {
  text: string;
  stars: number;
  delay: number;
}

function ReviewCard({ text, stars, delay }: ReviewCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-full md:w-[400px] snap-start"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#F4A940] text-xl">
            ★
          </span>
        ))}
      </div>

      {/* Review text */}
      <p className="text-[#1C1C1E] leading-relaxed mb-4">{text}</p>

      {/* Google badge */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-[#F9F7F4] px-3 py-1 rounded-full">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-xs font-medium text-[#6B7280]">Google</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const reviews = [
    {
      text: "Excellent care and very professional service. Dr. Vairamuthu is patient and explains treatment clearly. Highly recommend for all pet owners!",
      stars: 5,
    },
    {
      text: "Our dog had Parvo virus — Dr. Vairamuthu's treatment saved him when others couldn't. Forever grateful for his expertise and dedication.",
      stars: 5,
    },
    {
      text: "Very kind and friendly doctor. Identified my cockatiel's issue immediately and he recovered the next day. Amazing diagnostic skills!",
      stars: 5,
    },
  ];

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="py-12 md:py-20 bg-[#F9F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4">
            What Pet Parents Say
          </h2>
          <div className="w-24 h-1 bg-[#F4A940] mx-auto"></div>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              text={review.text}
              stars={review.stars}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
