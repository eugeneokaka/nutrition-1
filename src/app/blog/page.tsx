"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  createdAt: string;
  views: number;
  author: { username: string | null };
  _count: { comments: number; likes: number };
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  if (loading)
    return <p className="text-center mt-10">Loading blog posts...</p>;

  return (
    <div className="max-w-5xl mt-30 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="border rounded-xl p-4 hover:shadow-lg transition">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">
                By {post.author.username || "Unknown"} ·{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-700 line-clamp-3">{post.content}</p>
              <div className="mt-4 flex gap-4 text-sm text-gray-600">
                <span>👁️ {post.views}</span> {/* showing views */}
                <span>💬 {post._count.comments}</span>
                <span>🏷️ {post.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
