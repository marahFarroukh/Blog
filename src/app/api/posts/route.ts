import prisma from "@/app/utils/db";
import { CreatePostDto } from "@/app/utils/dtos";
import { postSchema } from "@/app/utils/validationSchemas";
import { Post } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/posts
 * @description Get All Posts
 * @access Public
 */

export async function GET(request: NextRequest) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "internal server error",
      },
      { status: 500 }
    );
  }
}

/**
 * @method Post
 * @route ~/api/posts
 * @description Create New Articals
 * @access private (only admin can creat new artical)
 */

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreatePostDto;

    const validation = postSchema.safeParse(body);
    console.log(validation);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const newPost: Post = await prisma.post.create({
      data: {
        title: body.title,
        description: body.description,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error " },
      { status: 500 }
    );
  }
}
