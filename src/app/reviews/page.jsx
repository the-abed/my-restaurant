import React from 'react';
import ReviewsPage from './ReviewsPage';


export const metadata = {
  title: "All Reviews",
  description: "Get your favorite reviews",
}
const Reviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default Reviews;