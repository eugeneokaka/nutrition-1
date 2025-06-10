"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Optional: Save token to localStorage/sessionStorage
      localStorage.setItem("token", data.token);

      // Redirect to dashboard or login
      router.push("/dashboard"); // Change to your app’s route
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded-2xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}
