import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function NewsDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    if (id) {
      const storedNews = JSON.parse(localStorage.getItem("news") || "[]");
      const selectedNews = storedNews.find((item) => item.id === id);
      setNewsItem(selectedNews);
    }
  }, [id]);

  if (!newsItem) return <div>Loading...</div>;

  // Create breadcrumb string that includes the news title
  const breadcrumbContent = (
    <>
      <Link legacyBehavior href="/news"><a className="hover:text-yellow-400">NEWS</a></Link> &nbsp; &gt; &nbsp; {newsItem.title.toUpperCase()}
    </>
  );

  return (
    <div>
      {/* PageHeader with news title */}
      <PageHeader 
        title={newsItem.title} 
        breadcrumb={breadcrumbContent} 
        backgroundImage="/testimonial.jpg"
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Featured Image */}
        <div className="mb-6">
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Date, Category, Views */}
        <div className="flex items-center text-sm text-gray-600 gap-4 mt-2 mb-6">
          <span className="font-semibold">{newsItem.category}</span>
          <span>•</span>
          <span>{newsItem.date}</span>
          <span>•</span>
          <span>{newsItem.views} views</span>
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-800 prose max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />

        {/* Social Share */}
        <div className="mt-8 pt-6 border-t flex items-center gap-4">
          <span className="font-medium">Share:</span>
          <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
          <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
