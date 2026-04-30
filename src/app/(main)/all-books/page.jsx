import BooksCard from '@/app/components/homepage/BooksCard';
import ButtonCategory from '@/app/components/shared/ButtonCategory';
import { getBooks } from '@/app/lib/data';
import Link from 'next/link';
import React from 'react';

const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const books = await getBooks();
  console.log(category, 'Category');
  const filterBook = category
    ? books.filter(
        (photo) => photo.category.toLowerCase() == category.toLowerCase(),
      )
    : books;
  return (
    <div className="grid grid-cols-12 w-10/12 mx-auto">
      {/* category selection */}
      <div className="col-span-2 bg-[#f9f9fa] p-6 sticky top-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
          Categories
        </h1>
        <ButtonCategory category={category} />
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
          <input
            type="search"
            required
            placeholder="Search books by title..."
          />
        </label>
        <div className="grid grid-cols-4 gap-4 my-3">
          {filterBook.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
