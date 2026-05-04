'use client';
import { useState } from 'react';
import BooksCard from '@/app/components/homepage/BooksCard';
import ButtonCategory from '../shared/ButtonCategory';

const SearchInput = ({ allBooks, currentCategory }) => {
  const [searchByTitle, setSearchByTitle] = useState('');

  const filtered = allBooks.filter((book) => {
    const matchesCat = currentCategory
      ? book.category.toLowerCase() === currentCategory.toLowerCase()
      : true;

    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchByTitle.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* Search and mobile category and all books */}
      <div className="sticky top-0 z-20 bg-[#0e0c10]/95 backdrop-blur-sm px-4 py-3 md:px-8 md:py-6 flex flex-col gap-3 md:gap-4">
        {/* Search Bar */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 md:h-5 md:w-5 text-gray-500"
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
          <input
            type="text"
            placeholder="Search books..."
            className="w-full bg-zinc-900/50 border border-white/10 text-white pl-11 pr-4 py-2.5 md:py-3.5 rounded-xl text-sm md:text-base focus:outline-none focus:border-amber-600 transition-all"
            onChange={(e) => setSearchByTitle(e.target.value)}
          />
        </div>

        {/* button category for mobil device  */}
        <div className="lg:hidden w-full overflow-x-auto pb-1 scrollbar-hide">
          <div className="flex flex-row gap-2 items-center min-w-max">
            <div className="flex flex-row gap-2 transform scale-95 origin-left">
              <ButtonCategory category={currentCategory} />
            </div>
          </div>
        </div>
      </div>

      {/* books card section */}
      <div className="flex-1 p-4 md:p-8 pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {filtered.length > 0 ? (
            filtered.map((book) => <BooksCard key={book.id} book={book} />)
          ) : (
            <div className="col-span-full text-center py-16 text-gray-500">
              <p className="text-lg">No books found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
