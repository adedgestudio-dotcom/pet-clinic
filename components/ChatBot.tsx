"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919444182357?text=Hello%2C%20I%20need%20help%20with%20my%20pet",
      "_blank"
    );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Chat Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-20 left-4 right-4 md:bottom-24 md:left-auto md:right-6 z-50 md:w-[340px] md:max-w-[340px]"
            >
              <div className="bg-linear-to-br from-white to-[#F9F7F4] rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-[#0D6E6E]/10">
                {/* Header */}
                <div className="bg-linear-to-r from-[#0D6E6E] to-[#0a5555] p-3 md:p-4 relative overflow-hidden">
                  <div className="absolute top-1 right-1 text-white/10 text-3xl">
                    🐾
                  </div>
                  <div className="absolute bottom-1 left-1 text-white/10 text-2xl">
                    🐾
                  </div>

                  <div className="relative flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg shrink-0">
                      🐕
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm md:text-base truncate">
                        Pet Care Assistant
                      </div>
                      <div className="text-white/90 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        Online now
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors shrink-0"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 md:p-4 space-y-3">
                  {/* Welcome Message */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-2"
                  >
                    <div className="w-7 h-7 bg-[#F4A940] rounded-full flex items-center justify-center text-sm shrink-0">
                      🐾
                    </div>
                    <div className="flex-1">
                      <div className="bg-linear-to-br from-[#0D6E6E]/10 to-[#0D6E6E]/5 rounded-xl rounded-tl-sm p-3">
                        <p className="text-[#1C1C1E] text-xs md:text-sm leading-relaxed">
                          Hi there! 👋 Need help with your furry friend?
                        </p>
                      </div>
                      <div className="text-[10px] text-[#6B7280] mt-1 ml-1">
                        Just now
                      </div>
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <div className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wide ml-1">
                      Quick Actions
                    </div>

                    {/* WhatsApp Button */}
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-linear-to-r from-[#25D366] to-[#20bd5a] text-white px-3 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-[shadow,transform] duration-200 hover:scale-[1.02] hover:-translate-y-0.5 flex items-center gap-2 group text-xs md:text-sm will-change-transform"
                    >
                      <div className="w-8 h-8 md:w-9 md:h-9 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shrink-0">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="font-bold truncate">
                          Chat on WhatsApp
                        </div>
                        <div className="text-[10px] text-white/80">
                          Instant replies
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Call Button */}
                    <a
                      href="tel:+919600103135"
                      className="w-full bg-linear-to-r from-[#0D6E6E] to-[#0a5555] text-white px-3 py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-[shadow,transform] duration-200 hover:scale-[1.02] hover:-translate-y-0.5 flex items-center gap-2 group text-xs md:text-sm will-change-transform"
                    >
                      <div className="w-8 h-8 md:w-9 md:h-9 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shrink-0">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
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
                      <div className="flex-1 text-left min-w-0">
                        <div className="font-bold truncate">Call Us Now</div>
                        <div className="text-[10px] text-white/80">
                          96001 03135
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </motion.div>

                  {/* Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-center gap-1.5 text-[10px] text-[#6B7280] pt-1"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                    Reply within 2 minutes
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group transition-transform duration-200 hover:scale-110 active:scale-90 will-change-transform"
      >
        {/* Pulse rings */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 bg-[#0D6E6E] rounded-full animate-ping opacity-50" />
            <div
              className="absolute inset-0 bg-[#F4A940] rounded-full animate-ping opacity-30"
              style={{ animationDelay: "0.5s" }}
            />
          </>
        )}

        {/* Main button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-[#0D6E6E] to-[#0a5555] rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Icon */}
          <div
            className={`relative transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? (
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.5 3C7.67 3 7 3.67 7 4.5S7.67 6 8.5 6 10 5.33 10 4.5 9.33 3 8.5 3zm7 0C14.67 3 14 3.67 14 4.5S14.67 6 15.5 6 17 5.33 17 4.5 16.33 3 15.5 3zM5 7.5C4.17 7.5 3.5 8.17 3.5 9s.67 1.5 1.5 1.5S6.5 9.83 6.5 9 5.83 7.5 5 7.5zm14 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-7 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
              </svg>
            )}
          </div>

          {/* Notification badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] md:text-xs font-bold shadow-lg">
              1
            </div>
          )}
        </div>

        {/* Tooltip */}
        {!isOpen && (
          <div className="hidden md:group-hover:block absolute right-20 top-1/2 -translate-y-1/2 bg-[#1C1C1E] text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-xl pointer-events-none">
            Need help? Chat with us!
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-[#1C1C1E]"></div>
          </div>
        )}
      </button>
    </>
  );
}
