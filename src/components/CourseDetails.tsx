import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// Import Quill.js dynamically to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface CourseSection {
  id: string;
  title: string;
  content: string; // Quill.js formatted HTML content
}

interface CourseDetailsProps {
  title: string;
  sections: CourseSection[];
}

export default function CourseDetails({ title, sections }: CourseDetailsProps) {
  return (
    <div className="space-y-12">
      {/* Course Title */}
      <h1 className="text-3xl font-bold">{title}</h1>

      {/* Course Sections (Loop through dynamically) */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="space-y-4">
          <h2 className="text-2xl font-bold">{section.title}</h2>
          <div
            className="quill-content text-gray-700"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </section>
      ))}
    </div>
  );
}
