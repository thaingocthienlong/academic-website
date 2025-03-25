import React from "react";
import { useRouter } from "next/router";

const NewsListItem = ({ news }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${news.id}`);
  };

  return (
    <div className="flex border-b pb-4 mb-4 cursor-pointer" onClick={handleClick}>
      {/* Image */}
      <div className="w-1/3 pr-4">
        <img src={news.image} alt={news.title} className="w-full h-32 object-cover rounded-md" />
      </div>
      
      {/* Content */}
      <div className="w-2/3">
        <h2 className="text-lg font-bold hover:text-blue-600">
          {news.title}
        </h2>
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="font-semibold">{news.category}</span>
          <span>-</span>
          <span>{news.date}</span>
        </div>
        <p className="text-gray-600 mt-2 text-sm">{news.description}</p>
      </div>
    </div>
  );
};

const NewsList = ({ newsData }) => {
  return (
    <div className="space-y-6">
      {newsData.map((news) => (
        <NewsListItem key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
