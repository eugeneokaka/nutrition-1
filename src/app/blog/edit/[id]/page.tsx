// app/blog/edit/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setImageUrl(data.imageUrl);
      setLoading(false);
    }

    if (id) fetchPost();
  }, [id]);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImageUrl(data.secure_url);
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !content || !category || !imageUrl) {
      alert("All fields are required");
      return;
    }

    setSubmitting(true);

    const res = await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, category, imageUrl }),
    });

    const result = await res.json();
    setSubmitting(false);

    if (res.ok) {
      alert("Post updated!");
      router.push(`/blog/${id}`);
    } else {
      alert(result.error || "Failed to update.");
    }
  }

  if (loading) return <p className="text-center mt-10">Loading post...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-36">
      <h2 className="text-2xl font-semibold">Edit Blog Post</h2>

      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="textarea textarea-bordered w-full h-32"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        className="input input-bordered w-full"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="file-input w-full"
      />

      {uploading && <p>Uploading image...</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Preview"
          className="w-32 h-32 object-cover rounded"
        />
      )}

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={submitting}
      >
        {submitting ? "Updating..." : "Update Post"}
      </button>
    </form>
  );
}
