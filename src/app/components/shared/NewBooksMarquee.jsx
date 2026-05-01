import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  { _id: '1', title: 'The Alchemist' },
  { _id: '2', title: 'Atomic Habits' },
  { _id: '3', title: 'The Silent Patient' },
  { _id: '4', title: 'Deep Work' },
];

const NewBooksMarquee = () => {
  return (
    <div className="flex justify-between items-center gap-2 md:gap-4 bg-[#fdf4ebc3] py-2 md:py-3 w-full md:w-10/12 mx-auto px-2 md:px-4 shadow-sm">
      <button className="btn text-black text-sm sm:text-lg md:text-2xl border-none px-2 md:px-6 font-bold whitespace-nowrap min-h-0 h-auto bg-transparent">
        🎉New Arrivals:
      </button>

      <Marquee pauseOnHover={true} speed={80} gradient={false}>
        {news.map((n) => (
          <div key={n._id} className="flex items-center">
            <span className="text-gray-800 font-medium text-sm md:text-lg cursor-pointer hover:text-red-600 transition-colors">
              {n.title}
            </span>
            <span className="mx-4 md:mx-8 text-gray-400 font-bold">|</span>
          </div>
        ))}

        <span className="text-blue-700 font-bold text-sm md:text-lg mr-4 md:mr-8">
          🔥 Special Discount on Memberships! Join Now and get 20% off...
        </span>
        <span className="mx-4 md:mx-8 text-gray-400 font-bold">|</span>
      </Marquee>
    </div>
  );
};

export default NewBooksMarquee;
