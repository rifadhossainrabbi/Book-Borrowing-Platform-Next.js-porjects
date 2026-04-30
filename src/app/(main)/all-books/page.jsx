import BooksCard from '@/app/components/homepage/BooksCard';
import React from 'react';

const AllBooksPage = async () => {
  const res = await fetch(
    'https://book-borrowing-platform-next-js-por.vercel.app/data.json',
    { cache: 'no-store' },
  );
  const books = await res.json();
  return (
    <div className="grid grid-cols-12 w-10/12 mx-auto">
      {/* category selection */}
      <div className="col-span-2 bg-[#f9f9fa] p-8">
        <h1 className='text-3xl font-semibold mb-3'>Categories</h1>
        <div className='flex flex-col text-left space-y-2.5'>
          <button className='btn'>All Categories</button>
          <button className='btn'>Story</button>
          <button className='btn'>Tech</button>
          <button className='btn'>Science</button>
        </div>
      </div>
      {/* Books Card */}
      <div className="col-span-10 bg-[#fefefe] p-8">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search books by title..." />
        </label>
        <div className="grid grid-cols-4 gap-4 my-3">
          {books.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
