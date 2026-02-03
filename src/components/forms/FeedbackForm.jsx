"use client";
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.feedback.value;
    // Logic for submission goes here
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),

    });

    const data = await res.json();
    if(data.insertedId) {
      alert("Feedback submitted successfully!");
    }

    console.log("Feedback submitted:", feedback);
    
    // Reset form after submission
    setFeedback("");
    alert("Thanks for your feedback!");
  };

  return (
    <div className="max-w-xl mx-auto p-6  rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Share your thoughts</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className="w-full border border-gray-300 p-4 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          name="feedback"
          id="feedback"
          rows={6}
          placeholder="What's on your mind?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors self-end"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;