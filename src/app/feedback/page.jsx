import React from 'react';
export const metadata = {
    title: "All Feedbacks",
    description: "Get your favorite feedbacks",
}

const getFeedback = async () => {
    const res = await fetch('http://localhost:3000/api/feedback/');
    const data = await res.json();
    return data;
}

const Feedback = async () => {
    const feedback = await getFeedback();
    return (
        <div>
            <h2 className="text-4xl font-bold">Feedback Page <span className="text-yellow-500">{feedback.length}</span> </h2>
        </div>
    );
};

export default Feedback;