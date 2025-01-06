"use client";
import { Post } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DOMAIN } from "../utils/constant";
import { toast } from "react-toastify";

interface EditPost {
  post: Post;
}

function DeleteButton({ post }: EditPost) {
  const router = useRouter();

  const deleteFun = async () => {
    const confirmation = confirm("Are you sure you want to delete this post?");
    if (!confirmation) return;

    try {
      await axios.delete(`${DOMAIN}/api/posts/${post.id}`);
      router.refresh(); // تحديث الصفحة بعد الحذف
      toast.success("deleted successfly");
      setTimeout(() => {
        router.push("/pages/posts"); // العودة إلى الصفحة السابقة بعد فترة قصيرة
      }, 500);
    } catch (error: any) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post. Please try again."); // رسالة تنبيه إذا فشل الحذف
    }
  };

  return (
    <button
      onClick={deleteFun}
      className="bg-red-800 border mt-2 text-white font-bold py-2 px-4 rounded-md hover:bg-red-950"
    >
      Delete Post
    </button>
  );
}

export default DeleteButton;
