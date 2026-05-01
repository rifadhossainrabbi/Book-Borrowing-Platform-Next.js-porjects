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
    <div className="flex justify-between items-center gap-4 bg-gray-100 py-3 w-11/12 md:w-10/12 mx-auto px-4  shadow-sm border border-gray-300 ">
      {/* Label Button */}
      <button className="btn text-black text-2xl border-none  px-6 font-bold">
        🎉New Arrivals:
      </button>

      {/* Marquee Content */}
      <Marquee pauseOnHover={true} speed={80} gradient={false}>
        {news.map((n) => (
          <div key={n._id} className="flex items-center">
            <span className="text-gray-800 font-medium text-lg cursor-pointer hover:text-red-600 transition-colors">
              {n.title}
            </span>
            {/* Separator */}
            <span className="mx-8 text-gray-400 font-bold">|</span>
          </div>
        ))}

        {/* discount message */}
        <span className="text-blue-700 font-bold text-lg mr-8">
          🔥 Special Discount on Memberships! Join Now and get 20% off...
        </span>
        <span className="mx-8 text-gray-400 font-bold">|</span>
      </Marquee>
    </div>
  );
};

export default NewBooksMarquee;
