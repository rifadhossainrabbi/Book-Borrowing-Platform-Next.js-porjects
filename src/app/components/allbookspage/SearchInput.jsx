'use client';
import { useState } from 'react';
import BooksCard from '@/app/components/homepage/BooksCard';
import ButtonCategory from '../shared/ButtonCategory';

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
      {/* search icon and all books */}
      {/* main div */}
      <div className="p-4 md:p-8 bg-[#0e0c10] sticky top-12 md:top-0 z-10">
        <div className="relative w-full">
          {/*search bar */}
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            {/* search icon */}
            <svg
              className="h-5 w-5 text-gray-500"
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
          </div>
          {/* input label */}
          <input
            type="text"
            placeholder="Search books by title..."
            className="w-full bg-zinc-900/50 border border-white/10 text-white pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:border-purple-600 transition-all placeholder:text-gray-500"
            onChange={(e) => setSearchByTitle(e.target.value)}
          />
        </div>

        {/* mobile device er jonno */}
        <div className="flex flex-col md:hidden w-full md:w-3/12 lg:w-2/12 bg-[#0e0c10] p-5 md:p-6 md:border-r border-white/5 h-auto md:h-full overflow-y-auto">
          {/* buttons */}
          <div className="flex">
            <ButtonCategory category={currentCategory} />
          </div>
        </div>
      </div>

      {/* allbooks */}
      <div className="flex-1 p-4 md:p-8 pt-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.length > 0 ? (
            filtered.map((book) => <BooksCard key={book.id} book={book} />)
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p className="text-xl">No books found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
