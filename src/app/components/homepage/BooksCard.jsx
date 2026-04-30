import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BooksCard = ({ book }) => {
  return (
    <div
      key={book.id}
      className="rounded-md border-0 shadow-md bg-gray-50 p-3 flex flex-col h-full">
      <div className="relative w-full aspect-[5/7] shrink-0">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl outline-1 outline-green-300"
        />
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-green-500 font-bold text-lg line-clamp-2">
            {book.title}
          </h2>
          <p className="text-gray-600 text-sm">{book.author}</p>
        </div>

        <div className="mt-auto pt-3">
          <Link href={`/all-books/${book.id}`}>
            <button className="btn bg-[#011732] hover:bg-[#011732]/90 w-full text-white rounded-md py-2">
              View Details <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
