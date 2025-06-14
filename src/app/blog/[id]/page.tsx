"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Comment = {
  id: string;
  content: string;
  createdAt: string;
  user: { username: string | null };
};

type BlogPost = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  createdAt: string;
  author: { username: string | null };
  _count: { likes: number; comments: number };
  comments: Comment[];
};

export default function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      setPost(data);
      setLoading(false);
    }

    if (id) fetchPost();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading post...</p>;
  if (!post)
    return <p className="text-center mt-10 text-red-600">Post not found</p>;

  return (
    <div className="max-w-3xl mt-20 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        By {post.author.username || "Unknown"} ·{" "}
        {new Date(post.createdAt).toLocaleDateString()} · 🏷️ {post.category}
      </p>

      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <div className="prose prose-lg max-w-none mb-8">{post.content}</div>

      <div className="text-sm text-gray-600 mb-6">
        ❤️ {post._count.likes} · 💬 {post._count.comments}
      </div>

      <h3 className="text-xl font-semibold mb-2">Comments</h3>
      <div className="space-y-4">
        {post.comments.length === 0 && (
          <p className="text-gray-500">No comments yet.</p>
        )}
        {post.comments.map((comment) => (
          <div key={comment.id} className="border p-3 rounded-md">
            <p className="text-gray-800">{comment.content}</p>
            <p className="text-sm text-gray-500 mt-1">
              By {comment.user.username || "Anonymous"} ·{" "}
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
