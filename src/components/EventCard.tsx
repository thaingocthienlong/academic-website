import React from "react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface EventCardProps {
  id: string;
  date: string;
  month: string;
  image: string;
  title: string;
  time: string;
  location: string;
  description: string;
  featured: boolean;
}

export default function EventCard({
  id,
  date,
  month,
  image,
  title,
  time,
  location,
  description,
  featured,
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`} passHref>
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg group">
        {/* Event Image */}
        <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />

        {/* Date Tag */}
        <div className="absolute top-4 left-4 bg-yellow-500 text-white font-bold text-center px-3 py-2 rounded-md">
          <span className="block text-xl">{date}</span>
          <span className="block text-xs uppercase">{month}</span>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

        {/* Event Details */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center text-sm gap-2 mt-2">
            <CalendarIcon className="w-4 h-4 text-white" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm gap-2 mt-1">
            <MapPinIcon className="w-4 h-4 text-white" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
