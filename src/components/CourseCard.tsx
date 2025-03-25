import Image from "next/image";
import { useRouter } from "next/router";

interface CourseCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  instructor?: string;
  instructorImage?: string;
  date?: string;
}

export function CourseCard({
  id,
  image,
  title,
  description,
  instructor,
  instructorImage,
  date,
}: CourseCardProps) {
  const router = useRouter();

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full h-full transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
         onClick={() => router.push(`/courses/${id}`)} // Redirect to course details
    >
      {/* Course Image */}
      <div className="w-full h-56">
        <Image 
          src={image || "https://placehold.co/400x250"} // Ensure default image if missing
          alt={title} 
          width={400} 
          height={250} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Course Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3 overflow-hidden">
          {description}
        </p>
      </div>

      {/* Course Footer */}
      <div className="flex items-center justify-between p-4 mt-auto">
        {instructor && instructorImage && (
          <div className="flex items-center">
            <Image
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
              src={instructorImage}
              alt={instructor}
            />
          </div>
        )}
        {date && <span className="text-gray-500 text-sm">{date}</span>}
      </div>
    </div>
  );
}
