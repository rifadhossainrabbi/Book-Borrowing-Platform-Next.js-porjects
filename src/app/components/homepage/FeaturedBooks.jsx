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
    <section className="bg-[#0e0c10] py-12">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Header Section */}
        <div className="flex flex-row items-center justify-between mb-8 md:mb-12 md:px-8">
          <h1
            className={`${robotoslab.className} text-2xl md:text-4xl font-bold text-white`}>
            Featured Books
          </h1>
          <Link href={'/all-books'}>
            <span className="group text-purple-500 hover:text-purple-400 text-sm md:text-xl font-semibold flex items-center gap-2 transition-colors">
              View All{' '}
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </Link>
        </div>

        {/* Books */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 md:px-8">
          {books.slice(0, 4).map((book) => (
            <BooksCard book={book} key={book.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
