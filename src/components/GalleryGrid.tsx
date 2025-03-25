import React from "react";
import MediaCard from "./MediaCard";

export default function GalleryGrid({ posts }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {posts.map((post) => 
        post.media.map((url, index) => (
          <MediaCard key={`${post.id}-${index}`} title={post.title} media={url} />
        ))
      )}
    </div>
  );
}
