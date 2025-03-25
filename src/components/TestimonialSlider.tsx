import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    name: "Adam James",
  },
  {
    text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    name: "Sophia Wilson",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
    name: "Michael Johnson",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleChange = (direction: number) => {
    setIsFadingOut(true); // Start fade-out

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + direction;
        if (newIndex < 0) return testimonials.length - 1;
        if (newIndex >= testimonials.length) return 0;
        return newIndex;
      });

      setIsFadingOut(false); // Reset after transition completes
    }, 500); // Fade-out duration
  };

  const backgroundImageUrl = "https://placehold.co/1520x400"; // Ensure this image is in the public folder

  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center group"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Testimonial Content */}
      <div className="relative text-center text-white px-6 max-w-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Text - Fade Out & Slide Up */}
          <motion.p
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }} // Only fade out
            transition={{ duration: 0.5, ease: "easeInOut", delay: isFadingOut ? 0 : 0.5 }}
            className="text-lg md:text-xl italic"
          >
            &quot;{testimonials[currentIndex].text}&quot;
          </motion.p>
        </AnimatePresence>

        {/* Name - Delayed Slide Up */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={`name-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }} // Only fade out
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: isFadingOut ? 0 : 1, // Name waits for text animation
            }}
            className="mt-4 text-lg font-semibold uppercase tracking-wide"
          >
            — {testimonials[currentIndex].name}
          </motion.h3>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        <button
          onClick={() => handleChange(-1)}
          className="p-2 bg-white/30 hover:bg-white/50 rounded-full"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        <button
          onClick={() => handleChange(1)}
          className="p-2 bg-white/30 hover:bg-white/50 rounded-full"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-4" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
