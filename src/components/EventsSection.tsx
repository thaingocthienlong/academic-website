import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function EventsSection() {
  const [events, setEvents] = useState([]);

  // Load events from storage and filter featured ones
  const loadEventsFromStorage = () => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
  
    console.log("🔍 Raw Events from Local Storage:", storedEvents);
  
    // Ensure `featured` is treated correctly (check both boolean and string versions)
    const featuredEvents = storedEvents.filter(event => {
      console.log(`ℹ️ Checking event: ${event.title}, Featured: ${event.featured}`);
      return event.featured === true || event.featured === "true";
    });
  
    console.log("✅ Filtered Featured Events:", featuredEvents);
  
    // Update state with featured events or clear list if none exist
    setEvents(featuredEvents.length > 0 ? featuredEvents : []);
  };

  useEffect(() => {
    loadEventsFromStorage(); // Fetch events on mount

    // Ensure a delay so localStorage is updated first
    setTimeout(() => {
      loadEventsFromStorage();
    }, 500); 

    // Listen for localStorage updates
    const handleStorageChange = (event) => {
      if (event.key === "events") {
        loadEventsFromStorage();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <section className="bg-gray-100 mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-gray-900">Featured Events</h2>
      <p className="text-center text-gray-600 mt-2">Check out our top events</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event, index) => <EventCard key={index} {...event} />)
        ) : (
          <p className="text-center text-gray-600">No featured events available.</p>
        )}
      </div>
    </section>
  );
}
