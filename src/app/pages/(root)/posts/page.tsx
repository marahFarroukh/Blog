import { Post } from "@prisma/client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { getPosts } from "@/app/postsApiCall/postsApiCall";
import DeleteButton from "@/app/components/deleteButton";
import LoadingPage from "./loading";

async function PostsPage() {
  const posts: Post[] = await getPosts();
  return (
    <>
      <div className="max-w-[100vw] w-full mx-auto h-full max-h-[100vh] p-5">
        <h1 className="text-3xl font-bold mb-4 text-green-800">Blogs</h1>
        <Suspense fallback={<LoadingPage />}>
          <div className="post flex  items-center gap-5 flex-wrap">
            {posts.map((post) => {
              return (
                <Link
                  key={post.id}
                  href={`/pages/posts/${post.id}`}
                  className="bg-slate-400 p-4 rounded-md shadow-md flex flex-col max-w-[350px] w-full gap-5 "
                >
                  <h2 className="text-xl font-bold text-white">{post.title}</h2>
                  <p className="text-white"> {post.description}</p>
                  <div className="btn">
                    <button className="bg-green-800 border mt-2 text-white font-bold py-2 px-4 rounded-md  hover:bg-green-950 disabled:bg-gray-500">
                      <Link href={`/pages/posts/edit/${post.id}`}>
                        Edit Post
                      </Link>
                    </button>
                    <DeleteButton post={post} />
                  </div>
                </Link>
              );
            })}
          </div>
        </Suspense>
      </div>
      ;
    </>
  );
}

export default PostsPage;
