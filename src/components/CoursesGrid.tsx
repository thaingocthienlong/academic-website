import { useRouter } from "next/router";
import { CourseCard } from "./CourseCard";

const courses = [
  {
    id: "1",
    image: "https://placehold.co/400x250",
    title: "Cybersecurity & Ethical Hacking",
    description: "Understand penetration testing and security principles.",
    instructor: "Alice Smith",
    instructorImage: "https://placehold.co/200x200",
    date: "April 15",
    sections: [
      { id: "course-objectives", title: "Course Objectives", content: "<p>Understand research methodologies...</p>" },
      { id: "course-participants", title: "Course Participants", content: "<p>Ideal for students and researchers...</p>" },
      { id: "facilitators", title: "Facilitators", content: "<p>Led by top experts in the field...</p>" },
      { id: "time-venue", title: "Time and Venue", content: "<p>Start Date: December 16, 2024</p>" },
      { id: "course-content", title: "Course Content", content: "<p>The course consists of 23 lectures...</p>" },
      { id: "tuition-fee", title: "Tuition Fee", content: "<p>$299, including materials and certification.</p>" },
      { id: "registration", title: "Registration", content: "<p>Register online before December 10, 2024.</p>" },
      { id: "contact-info", title: "Contact Information", content: "<p>Email: support@university.com | Phone: (123) 456-7890</p>" },
    ],
  },
  {
    id: "2",
    image: "https://placehold.co/400x250",
    title: "Digital Marketing Fundamentals",
    description: "SEO, social media marketing, and Google Ads training.",
    instructor: "Michael Lee",
    instructorImage: "https://placehold.co/200x200",
    date: "May 8",
    sections: [
      { id: "course-objectives", title: "Course Objectives", content: "<p>Learn digital marketing strategies...</p>" },
      { id: "course-participants", title: "Course Participants", content: "<p>For marketing professionals...</p>" },
      { id: "facilitators", title: "Facilitators", content: "<p>Led by industry leaders...</p>" },
      { id: "time-venue", title: "Time and Venue", content: "<p>Start Date: June 5, 2024</p>" },
      { id: "course-content", title: "Course Content", content: "<p>Google Ads, SEO, content marketing...</p>" },
      { id: "tuition-fee", title: "Tuition Fee", content: "<p>$199, including certification.</p>" },
      { id: "registration", title: "Registration", content: "<p>Register before June 1, 2024.</p>" },
      { id: "contact-info", title: "Contact Information", content: "<p>Email: support@digitalacademy.com</p>" },
    ],
  },
];

export default function CoursesGrid() {
  const router = useRouter();

  const handleCourseClick = (course) => {
    const updatedCourse = { ...course, image: "https://placehold.co/400x250" }; // Ensure new image URL
    localStorage.setItem(`course_${course.id}`, JSON.stringify(updatedCourse)); // Store updated data
    router.push(`/courses/${course.id}`); // Navigate to course details
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-gray-900">Our Courses</h2>
      <p className="text-center text-gray-600 mt-2">
        Explore our wide range of professional courses.
      </p>

      {/* Course Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="flex" onClick={() => handleCourseClick(course)}>
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </section>
  );
}
