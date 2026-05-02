import BookImage from '@/app/components/allbookspage/BookImage';
import { getBooks } from '@/app/lib/data';
import Link from 'next/link';


const BookDetails = async ({ params }) => {
  const { bookId } = await params;
  const books = await getBooks();
  const book = books.find((b) => b.id == Number(bookId));
  console.log(book, 'Book Detail');
  if (!book) {
    return <div className="text-center py-20">Book not found!</div>;
  }

  console.log(bookId, 'Id');
  return (
    <div className="min-h-screen bg-[#f8f6f2] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* back button */}
        <Link href="/all-books">
          <button className="mb-8 px-5 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white duration-300">
            ← Back to All Books
          </button>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-10 p-6 md:p-10">
          <div className="bg-[#f5f5f5] rounded-2xl flex justify-center items-center p-6">
            {/* left side image section */}
            
            {/* Image loading hole eita dekhabe */}
            <BookImage src={book.image_url} alt={book.title} />
          </div>

          {/* right side section */}
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-2">
              {book.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {book.title}
            </h1>

            <p className="mt-3 text-lg text-gray-500 font-medium">
              by {book.author}
            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              {book.description}
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase">
                Available Copies
              </h3>
              <p className="text-2xl font-bold text-green-600 mt-1">
                {book.available_quantity} Copies Left
              </p>
            </div>

            {/* borrow button */}
            <button className="mt-8 w-fit px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-orange-500 duration-300 shadow-md">
              Borrow This Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
