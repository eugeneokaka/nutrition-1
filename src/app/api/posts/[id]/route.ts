import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        author: { select: { username: true } },
        comments: {
          select: {
            id: true,
            content: true,
            createdAt: true,
            user: { select: { username: true } },
          },
          orderBy: { createdAt: "desc" },
        },
        _count: {
          select: { likes: true, comments: true },
        },
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (err) {
    console.error("Error fetching post:", err);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
