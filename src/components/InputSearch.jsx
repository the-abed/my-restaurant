"use client";
import React from 'react';

const InputSearch = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const search = form[0].value;
        console.log(search);
    }
    return (
        <div className='py-3 flex justify-center'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search' 
                className='border-2 rounded-2xl px-4 py-2'/>
                <button type='submit' className='btn'>Search</button>
            </form>
        </div>
    );
};

export default InputSearch;