import { CarouselCustomNavigation } from "@/components/Carousel";
import Introduction from "@/components/Introduction";
import FeaturedCourses from "@/components/FeaturedCourses";
import { FeaturedImageGallery } from "@/components/FeaturedImageGallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <main className="mx-auto">
      {/* Carousel Section */}
      <section className="w-full mx-auto">
        <CarouselCustomNavigation />
      </section>

      {/* Other Sections (Example) */}
      <Introduction />
      <section className="bg-gray-100">
        <FeaturedCourses />
      </section>
      <section className="container mx-auto px-6 py-12 ">
        <h2 className="text-3xl font-bold text-center text-blue-gray-900 mb-8">
          Image Gallery
        </h2>
        <FeaturedImageGallery />
      </section>
      <section className="bg-gray-100">
        <EventsSection />
      </section>
      <section className="">
        <TestimonialSlider />
      </section>
      <section className="">
        <NewsSection />
      </section>
    </main>
  );
}
