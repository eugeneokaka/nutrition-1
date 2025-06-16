"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Comment = {
  id: string;
  content: string;
  createdAt: string;
  user: { username: string | null } | null;
};

type BlogPost = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  createdAt: string;
  author: { username: string | null };
  authorId: string;
  views: number;
  _count: { likes: number; comments: number };
  comments: Comment[];
};

type LoggedInUser = {
  id: string;
  username: string;
  isAdmin: boolean;
};

export default function SinglePostPage() {
  const { id } = useParams();
  const router = useRouter();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [user, setUser] = useState<LoggedInUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchPostAndUser() {
      if (!id) return;

      try {
        const [postRes, userRes] = await Promise.all([
          fetch(`/api/posts/${id}`),
          fetch("/api/auth/me"),
        ]);

        const postData = await postRes.json();
        const userData = await userRes.json();

        setPost(postData);
        setUser(userData.user || null);
      } catch (err) {
        console.error("Error fetching post or user", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPostAndUser();
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Post deleted");
        router.push("/blog");
      } else {
        const error = await res.json();
        alert(error.error || "Failed to delete post");
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: commentText.trim(),
          postId: id,
        }),
      });

      if (res.ok) {
        setCommentText("");
        const newComment = await res.json();
        setPost((prev) =>
          prev
            ? {
                ...prev,
                comments: [newComment, ...prev.comments],
                _count: {
                  ...prev._count,
                  comments: prev._count.comments + 1,
                },
              }
            : prev
        );
      } else {
        alert("Failed to submit comment");
      }
    } catch (err) {
      alert("Error submitting comment");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading post...</p>;
  if (!post)
    return <p className="text-center mt-10 text-red-600">Post not found</p>;

  const canDelete = user?.isAdmin;

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
        👁️ {post.views} · 💬 {post._count.comments}
      </div>

      {canDelete && (
        <div className="flex gap-3 mb-8">
          <Button onClick={() => router.push(`/blog/edit/${post.id}`)}>
            Edit
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">Add a Comment</h3>
      <div className="mb-6">
        <Textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment here..."
          rows={4}
          className="mb-2"
        />
        <Button onClick={handleCommentSubmit} disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Comment"}
        </Button>
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
              By {comment.user?.username || "Anonymous"} ·{" "}
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
