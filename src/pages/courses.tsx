import PageHeader from "@/components/PageHeader";
import CoursesGrid from "@/components/CoursesGrid";

export default function Courses() {
    return (
      <main>
      <PageHeader 
        title="EXPLORE OUR COURSES" 
        breadcrumb="COURSES" 
        backgroundImage="/testimonial.jpg" 
      />
      <CoursesGrid />
    </main>
    );
  }
  