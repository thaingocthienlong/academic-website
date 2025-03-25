import { useState } from "react";

export default function RelatedCourses() {
  const [isOpen, setIsOpen] = useState(false);
  const relatedCourses = [
    { title: "Journalism Training Course 2025", link: "#" },
    { title: "Teacher Training Certification", link: "#" },
  ];

  return (
    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-bold flex justify-between"
      >
        Related Programs <span>{isOpen ? "▼" : "▶"}</span>
      </button>

      {isOpen && (
        <ul className="mt-2 space-y-2">
          {relatedCourses.map((course, index) => (
            <li key={index}>
              <a href={course.link} className="block p-2 hover:bg-blue-700 rounded-md">
                {course.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
