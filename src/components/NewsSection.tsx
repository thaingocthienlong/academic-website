import React from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    image: "https://placehold.co/360x250",
    title: "Learn English in Ease",
    date: "25 Jun 2050",
    views: 59,
    comments: 19,
    description:
      "There are many variations of passages of Lorem Ipsum, amrn in some by injected humour of passages of Lorem Ipsum.",
  },
  {
    image: "https://placehold.co/360x250",
    title: "Learn English in Ease",
    date: "25 Jun 2050",
    views: 59,
    comments: 19,
    description:
      "There are many variations of passages of Lorem Ipsum, amrn in some by injected humour of passages of Lorem Ipsum.",
  },
];

export default function NewsSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-blue-gray-900">LATEST NEWS</h2>
      <p className="text-center text-gray-600 mt-2">There are many variations of passages</p>

      {/* News Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </section>
  );
}
