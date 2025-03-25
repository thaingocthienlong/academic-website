import React from "react";
import { CalendarIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NewsCardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  views: number;
  description: string;
}

export default function NewsCard({ id, image, title, date, views, description }: NewsCardProps) {
  return (
    <Link href={`/news/${id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
        {/* News Image */}
        <img src={image} alt={title} className="w-full h-56 object-cover" />

        {/* News Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          {/* Metadata (Date, Views) */}
          <div className="flex items-center text-sm text-gray-600 gap-4 mt-2">
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4 text-gray-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <EyeIcon className="w-4 h-4 text-gray-500" />
              <span>{views}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mt-3">{description}</p>

          {/* Read More Link */}
          <span className="text-blue-700 font-semibold mt-4 inline-block hover:text-yellow-600">
            READ MORE
          </span>
        </div>
      </div>
    </Link>
  );
}
