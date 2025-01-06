import { Post } from "@prisma/client";
import Link from "next/link";
import { getSinglePost } from "@/app/postsApiCall/postsApiCall";
import DeleteButton from "@/app/components/deleteButton";

async function PostPage({ params }: { params: { postId: string } }) {
  const post: Post = await getSinglePost(params.postId);

  return (
    <>
      <div className="max-w-4xl p-5 mx-auto h-full flex flex-col justify-start max-h-[100vh] bg-white">
        <h1 className="text-3xl font-bold mb-4 text-green-800">Post Details</h1>
        <div className="card bg-slate-400 p-4 rounded-md shadow-md flex flex-col max-w-[350px] w-full h-[150px] justify-between">
          <h2 className="text-xl font-bold text-white">{post.title}</h2>
          <p className="text-white">{post.description}</p>
          <div className="mt-4">
            <Link href={`/pages/posts/edit/${post.id}`}>
              <button className="bg-green-800 border text-white font-bold py-2 px-4 rounded-md hover:bg-green-950">
                Edit Post
              </button>
            </Link>
            <DeleteButton post={post} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
