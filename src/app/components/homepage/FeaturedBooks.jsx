import Image from 'next/image';
import { Roboto_Slab } from 'next/font/google';
import Link from 'next/link';
import BooksCard from './BooksCard';
import { FaArrowRight } from 'react-icons/fa';

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
});

const FeaturedBooks = async () => {
  const res = await fetch(
    'https://book-borrowing-platform-next-js-por.vercel.app/data.json',
    {
      cache: 'no-store',
    },
  );
  const books = await res.json();

  return (
    <div className="w-10/12 mx-auto p-7 bg-white">
      <div className="flex justify-between">
        <h1 className={`${robotoslab.className} text-3xl mb-3`}>
          Featured Books
        </h1>
        <Link href={'/all-books'}>
          <span className="text-blue-500 text-xl font-semibold flex items-center gap-1">
            View All <FaArrowRight />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {books.slice(0, 4).map((book) => (
          <BooksCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
