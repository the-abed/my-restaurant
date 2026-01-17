import FoodCardSkeleton from '@/components/skeletons/FoodCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {
                [1,2,3,4,5,6,7,8].map((index) => <FoodCardSkeleton key={index}></FoodCardSkeleton>)
            }
        </div>
    );
};

export default loading;