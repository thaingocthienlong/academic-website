import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import CourseDetails from "@/components/CourseDetails";
import SidebarNavigation from "@/components/SidebarNavigation";

export default function CourseDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    if (id) {
      const storedCourse = localStorage.getItem(`course_${id}`);
      if (storedCourse) {
        setCourseData(JSON.parse(storedCourse));
      }
    }
  }, [id]);

  if (!courseData) return <p className="text-center">Loading...</p>;

  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title={courseData.title}
        breadcrumb={`COURSES / ${courseData.title}`}
        backgroundImage="/testimonial.jpg"
      />

      <section id="course-details-container" className="container mx-auto px-6 py-12 flex gap-8">
        {/* Sidebar Navigation */}
        <div className="w-1/4 hidden lg:block">
          <SidebarNavigation sections={courseData.sections || []} parentId="course-details-container" />
        </div>

        {/* Course Details */}
        <div className="w-full lg:w-3/4">
          <CourseDetails title={courseData.title} sections={courseData.sections || []} />
        </div>
      </section>
    </main>
  );
}
