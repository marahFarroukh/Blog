import React from "react";

function CommentComponent() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Comment</h2>
      <ul>
        <li className="mb-4 bg-slate-300 p-2">
          <div className="flex items-center mb-2">
            <div className="text-green-800 font-bold mr-2 ">oohn</div>
            <div className="text-slate-500">10 November 2023</div>
          </div>
          <p>wow awsome pro !!</p>
        </li>
      </ul>
    </div>
  );
}

export default CommentComponent;
