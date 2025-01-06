import prisma from "@/app/utils/db";
import { generateJWT } from "@/app/utils/generateToken";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    }

    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (!existingUser) {
      return NextResponse.json(
        { message: "User Not Registered" },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Invalid Data" }, { status: 403 });
    }

    const token = generateJWT({
      password,
      email,
    });

    await prisma.user.update({
      where: { email: email },
      data: {
        token,
      },
    });
    const cookie = serialize("jwtToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    let userData = {
      name: existingUser?.name,
      email: existingUser?.email,
      isAdmin: existingUser.isAdmin,
    };

    return NextResponse.json(
      { message: "Authenticated", user: userData, token },
      { status: 200, headers: { "Set-Cookie": cookie } }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
