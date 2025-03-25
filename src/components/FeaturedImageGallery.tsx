import React, { useState, useRef } from "react";

export function FeaturedImageGallery() {
  const data = [
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
    { imgelink: "https://placehold.co/1470x980" },
  ];

  const [active, setActive] = useState(data[0].imgelink);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Function to center the clicked thumbnail
  const scrollToThumbnail = (index: number) => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const thumbnails = scrollContainer.children;

    if (index < 0 || index >= thumbnails.length) return;

    const selectedThumbnail = thumbnails[index] as HTMLElement;
    const containerRect = scrollContainer.getBoundingClientRect();
    const thumbnailRect = selectedThumbnail.getBoundingClientRect();

    const containerCenter = containerRect.width / 2;
    const thumbnailCenter = thumbnailRect.left - containerRect.left + thumbnailRect.width / 2;
    const scrollLeftValue = scrollContainer.scrollLeft + (thumbnailCenter - containerCenter);

    if (index === 0 || scrollLeftValue < 0) {
      scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
    } else if (index >= data.length - 1) {
      scrollContainer.scrollTo({ left: scrollContainer.scrollWidth, behavior: "smooth" });
    } else {
      scrollContainer.scrollTo({ left: scrollLeftValue, behavior: "smooth" });
    }
  };

  // Drag Scrolling Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";

    // Prevents transparent image dragging effect
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  return (
    <div className="grid gap-4 select-none"> {/* Prevent text selection while dragging */}
      {/* Active Image */}
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Featured"
        />
      </div>

      {/* Thumbnails with Scroll Animation & Dragging */}
      <div
        className="relative w-full overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth cursor-grab"
        >
          {data.map(({ imgelink }, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                onClick={() => {
                  setActive(imgelink);
                  scrollToThumbnail(index);
                }}
                src={imgelink}
                className={`h-20 w-20 cursor-pointer rounded-lg object-cover object-center transition ${
                  active === imgelink ? "border-4 border-blue-500" : ""
                }`}
                alt="gallery-thumbnail"
                draggable={false} // Prevents dragging of the image itself
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
