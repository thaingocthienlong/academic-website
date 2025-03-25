import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import SidebarNavigation from "@/components/SidebarNavigation";
import Footer from "@/components/Footer";

export default function EventDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      const storedEvent = localStorage.getItem(`event_${id}`);
      if (storedEvent) {
        setEvent(JSON.parse(storedEvent));
      }
    }
  }, [id]);

  if (!event) return <p className="text-center">Loading...</p>;

  return (
    <main>
      <PageHeader title={event.title} breadcrumb={`EVENTS / ${event.title}`} backgroundImage={event.image} />

      <section className="container mx-auto px-6 py-12 flex gap-8">
        {/* Sidebar Navigation */}
        <div className="w-1/4 hidden lg:block">
          <SidebarNavigation sections={event.sections || []} parentId="event-details-container" />
        </div>

        {/* Event Details */}
        <div className="w-full lg:w-3/4">
          {event.sections?.map((section) => (
            <section key={section.id} id={section.id} className="mb-8">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-gray-600 mt-2">{section.content}</p>
            </section>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
