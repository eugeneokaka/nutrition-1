import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password, username, isAdmin } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({ where: { username } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
        isAdmin: isAdmin || false, // Default to false if not provided
      },
    });

    // Create JWT token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          email: newUser.email,
          username: newUser.username,
        },
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
