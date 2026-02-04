import Link from "next/link";
import React from "react";
export const metadata = {
  title: "All Feedbacks",
  description: "Get your favorite feedbacks",
};

const getFeedback = async () => {
  const res = await fetch("http://localhost:3000/api/feedback/", {
    cache: "force-cache",
    next: {
      revalidate: 30,
    }
  });
  return res.json();
};

const Feedback = async () => {
  const feedback = await getFeedback();
  console.log(feedback);
  return (
    <div>
      <h2 className="text-4xl font-bold">
        <span className="text-yellow-500">{feedback.length} </span>Feedback
        Found{" "}
      </h2>
     
     <div className="py-4">

<Link href="/feedback/add" className="btn"> Add Feedback</Link>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {feedback.map((feed) => (
          <div
            key={feed.id}
            className="border border-gray-300 p-4 rounded-lg mb-4 mt-4"
          >
           
            <p>{feed.message}</p> 
            <div className="flex gap-4 mt-4">
            <button className="px-4 py-1 bg-yellow-500 text-white rounded ">Edit</button>
            <button className="px-4 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
