import Image from 'next/image';
import { Roboto_Slab } from 'next/font/google';

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
});

const FeaturedBooks = async () => {
  const res = await fetch(
    'https://book-borrowing-platform-next-js-por.vercel.app/data.json',
    { cache: 'no-store' },
  );
  const books = await res.json();
  console.log(books, books.image_url);

  return (
    <div className="w-10/12 mx-auto p-7 bg-white">
      <h1 className={`${robotoslab.className} text-2xl mb-3`}>
        Featured Books
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {books.slice(0, 4).map((book) => (
          <div
            key={book.id}
            className="rounded-md p-3 border-0 shadow-md bg-gray-50">
            <figure className="">
              <Image
                src={book.image_url}
                width={200}
                height={200}
                alt={book.title}
                className="rounded-xl object-cover w-full h-[450px]"
              />
            </figure>
            <div className="p-3">
              <h2 className="card-title text-green-500">{book.title}</h2>
              <p>{book.author}</p>
              <div className="card-actions">
                <button className="btn bg-[#011732] w-full text-white rounded-md">
                  view Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
