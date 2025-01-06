/**
 * @method Post
 * @route ~/api/register
 * @desc Register
 * @access public
 */

import prisma from "@/app/utils/db";
import { generateJWT } from "@/app/utils/generateToken";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // التحقق من الحقول المطلوبة
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 422 }
      );
    }

    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { message: "User Already Registered, Please Log In" },
        { status: 403 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User creation failed." },
        { status: 500 }
      );
    }

    const token = generateJWT({ email });

    const cookie = serialize("jwtToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return NextResponse.json(
      {
        ...user,
        message: "Registered & Authenticated",
        token,
      },
      {
        status: 201,
        headers: { "Set-Cookie": cookie },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
