import React from 'react';

const Navbar = () => {
    return (
        <div className='px-5 py-4 flex justify-between gap-5 bg-stone-800'>
            <h2 className='text-white'>Restaurant</h2>
            <ul className='flex gap-5'>
                <li className='text-white'>Home</li>
                <li className='text-white'>Menu</li>
                <li className='text-white'>About</li>
                <li className='text-white'>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;