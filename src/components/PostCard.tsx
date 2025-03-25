import React, { useState } from "react";
import GalleryPopup from "./GalleryPopup";

export default function PostCard({ title, media }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white my-6 rounded-lg shadow-lg p-4 cursor-pointer w-full max-w-2xl"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <img src={media[0]} alt={title} className="w-full h-[50vh] object-cover rounded-md" />
      </div>

      {isOpen && <GalleryPopup title={title} media={media} close={() => setIsOpen(false)} />}
    </>
  );
}
