import React from 'react';
import { Roboto_Slab } from 'next/font/google';
import { FaArrowRight } from 'react-icons/fa';

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
});

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="h-[60vh] bg-[url('/banner.png')] bg-cover bg-center px-15 flex items-center">
        <div className="space-y-7">
          <h1 className={`text-7xl font-semibold ${robotoslab.className}`}>
            Find Your <br className="hidden md:flex" /> Next Read
          </h1>
          <p className="text-xl">
            Explore thousands of books across <br className="hidden md:flex" />{' '}
            Story, Tech, and Science.
          </p>
          <button className="btn bg-black text-white">
            Browse Now
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
