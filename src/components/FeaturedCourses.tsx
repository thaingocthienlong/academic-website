import { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";

export default function FeaturedCourses() {
  const [featuredCourses, setFeaturedCourses] = useState([]);

  const loadCoursesFromStorage = () => {
    const courses = [];
    for (let i = 1; i <= 6; i++) {
      const course = localStorage.getItem(`course_${i}`);
      if (course) {
        courses.push(JSON.parse(course));
      }
    }
    setFeaturedCourses(courses);
  };

  useEffect(() => {
    loadCoursesFromStorage(); // Load courses on mount

    // Listen for localStorage updates
    const handleStorageChange = (event) => {
      if (event.key && event.key.startsWith("course_")) {
        loadCoursesFromStorage(); // Reload if any course data changes
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-gray-900 mb-8">
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {featuredCourses.length > 0 ? (
          featuredCourses.map((course, index) => <CourseCard key={index} {...course} />)
        ) : (
          <p className="text-center text-gray-600">No featured courses available.</p>
        )}
      </div>
    </section>
  );
}
