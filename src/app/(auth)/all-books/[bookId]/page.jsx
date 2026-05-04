import BookImage from '@/app/components/allbookspage/BookImage';
import BorrowButton from '@/app/components/shared/BorrowButton';
import { getBooks } from '@/app/lib/data';
import Link from 'next/link';

const BookDetails = async ({ params }) => {
   
  const { bookId } = await params;
  const books = await getBooks();
  const book = books.find((b) => b.id == Number(bookId));

  if (!book) {
    return (
      <div className="min-h-screen bg-[#0e0c10] flex items-center justify-center text-white font-bold">
        Book not found!
      </div>
    );
  }

  return (
    // container div
    <div className="min-h-screen bg-[#0e0c10] px-4 sm:px-6 py-10 md:py-20 text-white flex flex-col justify-center">
      {/* main div */}
      <div className="max-w-6xl mx-auto w-full">
        {/* back button to all books page */}
        <Link href="/all-books">
          <button className="mb-8 md:mb-12 flex items-center gap-2 text-amber-400 hover:text-white transition-colors duration-300 font-medium text-sm md:text-base">
            <span className="text-xl">←</span> Back to All Books
          </button>
        </Link>

        {/* 2 column layout (book image and info) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12 lg:gap-24 items-stretch">
          {/* left side image section */}
          <div className="w-full flex justify-center md:justify-start col-span-1 md:col-span-2">
            <div className="w-full h-full max-w-[300px] sm:max-w-sm md:max-w-none rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <BookImage src={book.image_url} alt={book.title} />
            </div>
          </div>

          {/* right side book info */}
          <div className="flex flex-col space-y-5 md:space-y-5 col-span-1 md:col-span-4 text-center md:text-left h-full justify-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                <span className="bg-linear-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
                  {book.title}
                </span>
              </h1>
              <p className="mt-2 text-lg md:text-xl text-gray-400 font-medium">
                {book.author}
              </p>
            </div>

            {/* book category */}
            <div className="pt-1 flex justify-center md:justify-start">
              <span className="inline-block px-5 py-1.5 rounded-lg bg-green-500/10 text-green-500 text-sm font-bold border border-green-500/20">
                {book.category}
              </span>
            </div>

            {/* book descripton */}
            <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-xl mx-auto md:mx-0">
              {book.description}
            </p>

            {/* available quantity and button */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 items-center md:items-start lg:items-center pt-4">
              <div className="space-y-1">
                <h3 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  Available Quantity
                </h3>
                <p className="text-lg md:text-xl font-bold text-green-500">
                  {book.available_quantity} copies left
                </p>
              </div>

              {/* button - modified with glow and hover effect */}
              <BorrowButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
