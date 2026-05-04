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
    <div className="bg-[#1a1c31] w-full">
      <div className="flex justify-between items-center gap-2 md:gap-4 py-2 md:py-3 w-full md:container mx-auto shadow-sm">
        <button className="btn text-white text-sm sm:text-lg md:text-xl font-bold min-h-0 h-auto bg-transparent">
          🎉New Arrivals:
        </button>

        <Marquee pauseOnHover={true} speed={80} gradient={false}>
          {news.map((n) => (
            <div key={n._id} className="flex items-center">
              <span className="text-white font-medium text-sm md:text-lg cursor-pointer hover:text-purple-500 transition-colors">
                {n.title}
              </span>
              <span className="mx-4 md:mx-8 text-gray-400 font-bold">|</span>
            </div>
          ))}

          <span className="text-blue-500 font-bold text-sm md:text-lg mr-4 md:mr-8">
            🔥Special Discount on Memberships! Join Now and get 20% off...
          </span>
          <span className="mx-4 md:mx-8 text-gray-400 font-bold">|</span>
        </Marquee>
      </div>
    </div>
  );
};

export default NewBooksMarquee;
