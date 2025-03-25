import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryPost from "@/components/GalleryPost";
import GalleryGrid from "@/components/GalleryGrid";
import { LoadingOverlay } from "@mantine/core";


export default function Gallery() {
  const [isGridMode, setIsGridMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  const dummyPosts = [
    { id: "1", title: "Graduation Ceremony", media: ["https://placehold.co/600x400"] },
    { id: "2", title: "Annual Sports Day", media: ["https://placehold.co/600x400", "https://placehold.co/600x400"] },
    { id: "3", title: "Art Exhibition", media: ["https://placehold.co/600x400"] },
    { id: "4", title: "Science Fair", media: ["https://placehold.co/600x400", "https://placehold.co/600x400"] },
  ];

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    setIsLoading(true);
    setRenderKey((prev) => prev + 1);
  }, [isGridMode]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header Section with Toggle Switch */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gallery</h1>

        {/* Toggle Switch */}
        <button
          className={`relative w-20 h-10 rounded-full flex items-center transition-all ${isGridMode ? "bg-blue-100" : "bg-red-100"
            }`}
          onClick={() => setIsGridMode(!isGridMode)}
        >
          {/* Toggle Circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold transition-all ${isGridMode ? "bg-blue-500 translate-x-11" : "bg-red-500 translate-x-1"
              }`}
          >
            {isGridMode ? "Grid" : "Post"}
          </div>
        </button>
      </div>

      {/* Animated View Switching */}
      <div className="relative h-auto min-h-screen">
        <LoadingOverlay visible={isLoading} overlayProps={{ radius: "sm", blur: 2 }} />
        <AnimatePresence mode="wait">
          {isGridMode ? (
            <motion.div
              key={`grid-${renderKey}`}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onAnimationComplete={handleAnimationComplete}
              className="w-full"
            >
              <GalleryGrid posts={dummyPosts} />
            </motion.div>
          ) : (
            <motion.div
              key={`post-${renderKey}`}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onAnimationComplete={handleAnimationComplete}
              className="w-full"
            >
              <GalleryPost posts={dummyPosts} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
