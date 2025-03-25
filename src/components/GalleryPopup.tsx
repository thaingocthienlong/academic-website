import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPopup({ title, media, close }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-xl font-bold mb-4">{title}</h3>

          {/* Media Viewer */}
          <Carousel
            className="rounded-xl w-full h-[60vh]"
            navigation={({ setActiveIndex, activeIndex, length }) => length > 1 ?
              (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              ) : null
            }
            prevArrow={({ handlePrev }) =>
              media.length > 1 ? ( // Hide arrows if only one item
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-2 -translate-y-2/4"
                >
                  <ChevronLeftIcon strokeWidth={3} className="mr-1 h-7 w-7" />
                </IconButton>
              ) : null
            }
            nextArrow={({ handleNext }) =>
              media.length > 1 ? ( // Hide arrows if only one item
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 right-2 -translate-y-2/4"
                >
                  <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />

                </IconButton>
              ) : null
            }
          >
            {media.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`${title} - ${index + 1}`}
                className="h-full w-full object-cover rounded-lg"
              />
            ))}
          </Carousel>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
