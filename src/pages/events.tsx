import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import EventCard from "@/components/EventCard";

const EVENTS_PER_PAGE = 9;

export default function Events() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Check if events exist in local storage
    let storedEvents = JSON.parse(localStorage.getItem("events") || "[]");

    if (storedEvents.length === 0) {
      // If no events exist, store default data
      storedEvents = [
        { id: "1", date: "20", month: "Apr", image: "https://placehold.co/400x250", title: "Learn English in Ease", time: "4:00 PM - 8:00 PM", location: "Dhaka, Bangladesh", description: "Join our English learning session with expert instructors.", featured: true  },
        { id: "2", date: "24", month: "Apr", image: "https://placehold.co/400x250", title: "Advanced English Workshop", time: "2:00 PM - 6:00 PM", location: "New York, USA", description: "A specialized workshop focusing on English fluency.", featured: true  },
        { id: "3", date: "10", month: "May", image: "https://placehold.co/400x250", title: "English Speaking Bootcamp", time: "10:00 AM - 2:00 PM", location: "London, UK", description: "Improve your speaking skills in an interactive bootcamp.", featured: true  },
        { id: "4", date: "15", month: "Jun", image: "https://placehold.co/400x250", title: "Public Speaking Masterclass", time: "5:00 PM - 9:00 PM", location: "Sydney, Australia", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", featured: false },
        { id: "5", date: "20", month: "Jul", image: "https://placehold.co/400x250", title: "Business English Training", time: "3:00 PM - 7:00 PM", location: "Tokyo, Japan", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", featured: false },
        { id: "6", date: "5", month: "Aug", image: "https://placehold.co/400x250", title: "Creative Writing Workshop", time: "1:00 PM - 5:00 PM", location: "Berlin, Germany", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", featured: false },
        { id: "7", date: "10", month: "Sep", image: "https://placehold.co/400x250", title: "Pronunciation Perfection", time: "2:00 PM - 6:00 PM", location: "Paris, France", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", featured: false },
        { id: "8", date: "18", month: "Oct", image: "https://placehold.co/400x250", title: "Accent Reduction Bootcamp", time: "4:00 PM - 8:00 PM", location: "Toronto, Canada", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", featured: false },
        { id: "9", date: "22", month: "Nov", image: "https://placehold.co/400x250", title: "IELTS Preparation Workshop", time: "9:00 AM - 1:00 PM", location: "Mumbai, India", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", featured: false }
      ];

      localStorage.setItem("events", JSON.stringify(storedEvents));
    }

    setEvents(storedEvents);
  }, []);

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const paginatedEvents = events.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  const handleEventClick = (event) => {
    localStorage.setItem(`event_${event.id}`, JSON.stringify(event)); // Store selected event
    router.push(`/events/${event.id}`); // Navigate to details page
  };

  return (
    <div>
      <PageHeader title="Our Events" breadcrumb="EVENTS" backgroundImage="/testimonial.jpg" />

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedEvents.map((event) => (
            <div key={event.id} onClick={() => handleEventClick(event)}>
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}>
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)} className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"}`}>
              {index + 1}
            </button>
          ))}

          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
