"use client";
import axios from "axios";

import { useState } from "react";
import { DOMAIN } from "../utils/constant";
import { useRouter } from "next/navigation";

function FormNewPost() {
  const input =
    "w-full py-2 text-black px-3 border rounded-md border-green-800 focus:outline-none focus:border-green-400";

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${DOMAIN}/api/posts`, { title, description });
      setTitle("");
      setDescription("");
      router.refresh();
      setTimeout(() => {
        router.push("/pages/posts");
      }, 500);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        className="max-w-4xl w-full p-4 bg-slate-300  border-green-800 border rounded-lg shadow-lg"
        onSubmit={handelSubmit}
      >
        <h1 className="text-xl mb-3 font-bold text-green-800">Add Artical</h1>
        <div className="input mb-4">
          <input
            type="text"
            className={input}
            placeholder="Enter Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input mb-4">
          <textarea
            name="textarea"
            rows={5}
            className={input}
            placeholder="Enter Post Content"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-800 border w-full text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-green-950"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default FormNewPost;
