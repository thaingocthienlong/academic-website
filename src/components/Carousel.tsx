import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
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
      )}
    >
      <div className="relative w-full h-full">
        <Image
          src="https://placehold.co/1520x740"
          alt="image 1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src="https://placehold.co/1520x740"
          alt="image 2"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src="https://placehold.co/1520x740"
          alt="image 3"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </Carousel>
  );
}