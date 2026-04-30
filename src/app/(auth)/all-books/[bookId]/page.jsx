import { getBooks } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookDetails = async ({ params }) => {
  const { bookId } = await params;
  // const book = await getBookById(bookId);
  // console.log(book);
  const books = await getBooks();
  const book = books.find((b) => b.id == Number(bookId));
  console.log(book, 'Book Detail');

  console.log(bookId, 'Id');
  return (
    <div>
      <Link href={'/all-books'}>
        <h1>Back to All Books</h1>
      </Link>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={book.image_url}
            alt={book.title}
            width={300}
            height={300}
          />
          <div>
            <h1 className="text-5xl font-bold">{book.title}</h1>
            <p className="py-6">{book.description}</p>
            <h1>Available Quantity</h1>
            <p className="text-green-500">
              {book.available_quantity} copies left
            </p>
            <button className="btn btn-primary">Borrow This Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
