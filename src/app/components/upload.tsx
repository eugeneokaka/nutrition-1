"use client";

import { useState } from "react";

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState("");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImageUrl(data.secure_url); // Cloudinary URL
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" className="mt-4 max-w-xs" />
      )}
    </div>
  );
}
