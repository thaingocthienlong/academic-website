import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// Import Quill.js dynamically to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface NewsDetailsProps {
  title: string;
  date: string;
  views: number;
  comments: number;
  content: string; // Quill.js formatted HTML content
}

export default function NewsDetails({ title, date, views, comments, content }: NewsDetailsProps) {
  return (
    <div className="space-y-6">
      {/* News Title */}
      <h1 className="text-3xl font-bold">{title}</h1>

      {/* Meta Information */}
      <div className="flex items-center text-gray-600 space-x-4 text-sm">
        <span>📅 {date}</span>
        <span>👁️ {views}</span>
        <span>💬 {comments}</span>
      </div>

      {/* News Content */}
      <div className="quill-content text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />

      {/* Social Media Share */}
      <div className="border-t pt-4 mt-6 flex justify-between items-center text-gray-500 text-sm">
        <span>Tags: <a href="#" className="text-blue-500">News</a>, <a href="#" className="text-blue-500">Updates</a></span>
        <div className="flex space-x-3">
          <span>Share:</span>
          <a href="#" className="text-blue-500">🔵 Facebook</a>
          <a href="#" className="text-blue-500">🐦 Twitter</a>
          <a href="#" className="text-blue-500">📸 Instagram</a>
        </div>
      </div>
    </div>
  );
}
