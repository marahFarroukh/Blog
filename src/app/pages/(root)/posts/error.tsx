"use client";

import { useEffect } from "react";

function PostErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 h-full">
      <h2 className="text-[4rem] text-green-800 font-bold">
        Something Went Worng
      </h2>
      <button
        className="bg-red-700 text-white w-36 h-12 rounded font-semibold hover:bg-red-900"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}

export default PostErrorPage;
