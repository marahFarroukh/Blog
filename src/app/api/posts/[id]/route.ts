import prisma from "@/app/utils/db";
import { UpdatePostDto } from "@/app/utils/dtos";
import { postSchema } from "@/app/utils/validationSchemas";

import { NextRequest, NextResponse } from "next/server";





   interface Props {
     params: {
       id: string;
     };
   }

   export async function GET(request: NextRequest, { params }: Props) {
     try {
       const posts = await prisma.post.findUnique({
         where: { id: parseInt(params.id) },
       });
       if (!posts) {
         return NextResponse.json(
           { message: "article not found" },
           { status: 404 }
         );
       }

       return NextResponse.json(posts, { status: 200 }); // استخدام 200 بدلاً من 201 لنجاح الطلب
     } catch (error) {
       return NextResponse.json(
         {
           message: "internal server error",
         },
         { status: 500 }
       );
     }
   }
   




export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!post) {
      return NextResponse.json({ message: "post not found" }, { status: 404 });
    }
    const body = (await request.json()) as UpdatePostDto;
    const data = {
      // title:body.title || post.title ,
      title: body.title ? body.title : post.title,
      description: body.description || post.description,
    };

    const validation = postSchema.safeParse(data);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const updatePost = await prisma.post.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: "artical not found" }, { status: 500 });
  }
}


export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    await prisma.post.delete({ where: { id: parseInt(params.id) } });
    return NextResponse.json(
      {
        message: "post is deleted",
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
