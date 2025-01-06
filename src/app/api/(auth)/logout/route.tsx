import prisma from "@/app/utils/db";
import verifyToken from "@/app/utils/verifyToken";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("jwtToken")?.value || "";
    if (!token) {
      return NextResponse.json(
        { message: "No Token Provided" },
        { status: 400 }
      );
    }

    const payload = verifyToken(token);
    if (!payload || !payload.email) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 401 });
    }

    //update the user's token
    await prisma.user.update({
      where: { email: payload.email },
      data: { token: null },
    });
    //    Optonally delete the cookie from the user's browser
    const response = NextResponse.json({ message: "Logout" }, { status: 200 });
    response.cookies.set("jwtToken", "", {
      httpOnly: true,
      secure: true,
      path: "/",
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    console.error("Error During Logout:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
