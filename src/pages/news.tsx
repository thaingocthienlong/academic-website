import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import NewsList from "@/components/NewsListItem";

const defaultNewsData = [
  {
    id: "1",
    image: "https://placehold.co/360x250",
    title: "Learn English in Ease",
    date: "25 Jun 2050",
    category: "Education",
    views: 59,
    description: "There are many variations of passages of Lorem Ipsum.",
    content: "Full content of Learn English in Ease..."
  },
  {
    id: "2",
    image: "https://placehold.co/360x250",
    title: "Advanced Writing Techniques",
    date: "10 Jul 2050",
    category: "Writing",
    views: 120,
    description: "Enhance your writing skills with these expert techniques.",
    content: "Full content of Advanced Writing Techniques..."
  },
  {
    id: "3",
    image: "https://placehold.co/360x250",
    title: "Public Speaking Masterclass",
    date: "15 Aug 2050",
    category: "Speaking",
    views: 87,
    description: "Master public speaking and captivate any audience.",
    content: "Full content of Public Speaking Masterclass..."
  }
];

const ITEMS_PER_PAGE = 3;

export default function News() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem("news") || "[]");

    if (storedNews.length === 0) {
      localStorage.setItem("news", JSON.stringify(defaultNewsData));
      setNewsData(defaultNewsData);
    } else {
      setNewsData(storedNews);
    }
  }, []);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNewsClick = (news) => {
    localStorage.setItem(`news_${news.id}`, JSON.stringify(news)); // Store selected news
    router.push(`/news/${news.id}`); // Navigate to details page
  };

  return (
    <div>
      <PageHeader title="Latest News" breadcrumb="NEWS" backgroundImage="/testimonial.jpg" />

      {/* News List */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {paginatedNews.map((news) => (
            <div key={news.id} onClick={() => handleNewsClick(news)} className="cursor-pointer">
              <div className="flex border-b pb-4 mb-4">
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
            </div>
          ))}
        </div>

        {/* Pagination - using the same style as Events page */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1} 
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentPage(index + 1)} 
              className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            >
              {index + 1}
            </button>
          ))}

          <button 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages} 
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
