

import React from "react";
import { Post } from "@prisma/client";
import { getSinglePost } from "@/app/postsApiCall/postsApiCall";
import FormEditPost from "./editArticalForm";

interface EditArticalPageProps {
  params: { postId: string };
}

const EditArticalPage = async ({ params }: EditArticalPageProps) => {
  const post: Post = await getSinglePost(params.postId);
  return (
    <>
      <section className="w-full flex items-center justify-center px-5">
        <div className="shadow p-4  rounded w-full">
          <FormEditPost post={post} />
        </div>
      </section>
    </>
  );
};

export default EditArticalPage;
