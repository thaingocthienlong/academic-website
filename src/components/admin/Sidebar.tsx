import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed top-0 left-0 py-6 px-4">
      <h2 className="text-xl font-bold text-center">Admin Panel</h2>
      <ul className="mt-6 space-y-4">
        <li>
          <Link
            href="/admin"
            className={`block py-2 px-4 rounded hover:bg-gray-700 ${
              router.pathname === "/admin" ? "bg-gray-700" : ""
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/admin/courses"
            className={`block py-2 px-4 rounded hover:bg-gray-700 ${
              router.pathname === "/admin/courses" ? "bg-gray-700" : ""
            }`}
          >
            Manage Courses
          </Link>
        </li>
        <li>
          <Link
            href="/admin/news"
            className={`block py-2 px-4 rounded hover:bg-gray-700 ${
              router.pathname === "/admin/news" ? "bg-gray-700" : ""
            }`}
          >
            Manage News
          </Link>
        </li>
        <li>
          <Link
            href="/admin/events"
            className={`block py-2 px-4 rounded hover:bg-gray-700 ${
              router.pathname === "/admin/events" ? "bg-gray-700" : ""
            }`}
          >
            Manage Events
          </Link>
        </li>
        <li>
          <Link
            href="/admin/gallery"
            className={`block py-2 px-4 rounded hover:bg-gray-700 ${
              router.pathname === "/admin/gallery" ? "bg-gray-700" : ""
            }`}
          >
            Manage Gallery
          </Link>
        </li>
      </ul>
    </aside>
  );
}
