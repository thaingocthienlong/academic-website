import React from "react";
import PostCard from "./PostCard";

export default function GalleryPost({ posts }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} media={post.media} />
      ))}
    </div>
  );
}
