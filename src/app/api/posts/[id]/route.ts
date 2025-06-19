import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.blogPost.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = req.cookies.get("token")?.value;

  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const user = jwt.verify(token, JWT_SECRET) as { id: string };

    const post = await prisma.blogPost.findUnique({ where: { id: params.id } });

    if (!post || post.authorId !== user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { title, content, category, imageUrl } = await req.json();

    const updatedPost = await prisma.blogPost.update({
      where: { id: params.id },
      data: {
        title,
        content,
        category,
        imageUrl,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid token or server error" },
      { status: 500 }
    );
  }
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);

    // Only allow delete if user is an admin (your client)
    if (!decoded.isAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const post = await prisma.blogPost.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: "Post deleted", post },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
