export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        author: {
          select: { username: true },
        },
        _count: {
          select: { comments: true, likes: true },
        },
      },
    });

    return NextResponse.json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
