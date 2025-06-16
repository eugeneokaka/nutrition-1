// /app/api/comments/route.ts
import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/utils/db";
import { prisma } from "@/lib/prisma"; // Adjust the import path as necessary
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { content, postId } = body;

    if (!content || !postId) {
      return NextResponse.json(
        { error: "Missing content or postId" },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        // userId is not included so it will be anonymous
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to post comment" },
      { status: 500 }
    );
  }
}
