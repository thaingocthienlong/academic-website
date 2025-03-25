import React, { useState } from "react";
import GalleryPopup from "./GalleryPopup";

export default function MediaCard({ title, media }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={media} alt={title} className="w-full h-[40vh] object-cover" />
      </div>

      {isOpen && <GalleryPopup title={title} media={[media]} close={() => setIsOpen(false)} />}
    </>
  );
}
