'use client';
import { useState } from 'react';
import BooksCard from '@/app/components/homepage/BooksCard';

const SearchInput = ({ allBooks, currentCategory }) => {
  const [searchByTitle, setSearchByTitle] = useState('');

  // categoy and search filtering
  const filtered = allBooks.filter((book) => {
    // categoyr filter
    const matchesCat = currentCategory
      ? book.category.toLowerCase() === currentCategory.toLowerCase()
      : true;

    // input field er text jodi book.title a thake tobe seigulo dekhabe mathchesSearch
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchByTitle.toLowerCase());

    // duitai return korbe 
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* search input */}
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
            type="text"
            placeholder="Search books by title..."
            className="grow"
            onChange={(e) => setSearchByTitle(e.target.value)}
          />
        </label>
      </div>

      {/* booklist*/}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filtered.length > 0 ? (
            filtered.map((book) => <BooksCard key={book.id} book={book} />)
          ) : (
            <div className="col-span-full text-center py-10 text-gray-400">
              No books found.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
