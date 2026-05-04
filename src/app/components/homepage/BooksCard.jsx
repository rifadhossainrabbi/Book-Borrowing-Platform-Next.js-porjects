import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BooksCard = ({ book }) => {
  return (
    <div
      key={book.id}
      className="group rounded-2xl bg-[#ffb24712] hover:bg-transparent p-4 flex flex-col h-full border border-transparent hover:border-amber-500 transition-all duration-300 shadow-xl">
      {/* book image */}
      <div className="relative w-full aspect-[5/7] overflow-hidden rounded-xl">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* author detail and available books */}
      <div className="pt-5 flex flex-col flex-grow">
        <div className="flex-grow">
          {/* book name and available */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-2">
            <h2 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
              {book.title}
            </h2>
            <span className="text-[10px] uppercase tracking-wider bg-purple-500/10 text-purple-400 px-2 py-1 rounded-md border border-purple-500/20 whitespace-nowrap">
              {book.available_quantity} Left
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-4">{book.author}</p>
        </div>

        {/* button */}
        <div className="mt-auto">
          <Link href={`/all-books/${book.id}`} className="block">
            <button className="flex items-center justify-center gap-2 w-full border border-amber-600 hover:bg-linear-to-r from-amber-300 via-amber-800 to-amber-800 text-white text-sm font-bold py-1 md:py-3 rounded-xl transition-all active:scale-95">
              View Details <FaArrowRight className="text-xs" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
