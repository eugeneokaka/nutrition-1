"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

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

    const res = await fetch("/api/posts/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, category, imageUrl }),
    });

    const result = await res.json();
    setSubmitting(false);

    if (res.ok) {
      alert("Post created!");
      router.push("/blog");
    } else {
      alert(result.error || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold">Create New Blog Post</h2>

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
        {submitting ? "Submitting..." : "Create Post"}
      </button>
    </form>
  );
}
