import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// import { verifyJWT } from "@/lib/jwt"; // your JWT verification helper
import { verifyJWT } from "@/lib/jwt";
export async function POST(req: NextRequest) {
  console.log("Creating new blog post...");
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const decoded = verifyJWT(token);
  if (!decoded?.id) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const { title, content, category, imageUrl } = await req.json();

  if (!title || !content || !category || !imageUrl) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const newPost = await prisma.blogPost.create({
    data: {
      title,
      content,
      category,
      imageUrl,
      authorId: decoded.id,
    },
  });

  return NextResponse.json(newPost);
}
