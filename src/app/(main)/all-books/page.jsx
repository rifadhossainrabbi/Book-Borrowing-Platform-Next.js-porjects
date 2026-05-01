import BooksCard from '@/app/components/homepage/BooksCard';
import ButtonCategory from '@/app/components/shared/ButtonCategory';
import { getBooks } from '@/app/lib/data';
import Link from 'next/link';
import React from 'react';

const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const books = await getBooks();

  const filterBook = category
    ? books.filter(
        (photo) => photo.category.toLowerCase() == category.toLowerCase(),
      )
    : books;

  return (
    //  Parent div
    <div className="flex flex-col md:flex-row w-full lg:w-10/12 mx-auto h-screen overflow-hidden">

      {/* left side Category options */}
      <div className="w-full md:w-3/12 lg:w-2/12 bg-[#f9f9fa] p-4 md:p-6 overflow-y-auto max-h-[30vh] md:max-h-full">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 border-b pb-3">
          Categories
        </h1>
        <ButtonCategory category={category} />
      </div>

      {/* right side search bar and all books card. search bar fixed thakbe r books card gulo sticky */}
      <div className="w-full md:w-9/12 lg:w-10/12 flex flex-col h-full bg-[#fefefe]">
        {/* search bar */}
        <div className="p-4 md:p-8 bg-white sticky top-0 z-10">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              className="h-5 w-5 opacity-50"
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
              className="grow"
              required
              placeholder="Search books by title..."
            />
          </label>
        </div>

        {/* all books card */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filterBook.map((book) => (
              <BooksCard key={book.id} book={book} />
            ))}
          </div>

          {/* data na thakle No books */}
          {filterBook.length === 0 && (
            <div className="text-center py-10 text-gray-400">
              No books found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
