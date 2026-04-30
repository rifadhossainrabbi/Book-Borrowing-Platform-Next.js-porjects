import Image from 'next/image';

const FeaturedBooks = async () => {
  const res = await fetch(
    'https://book-borrowing-platform-next-js-por.vercel.app/data.json',
    { cache: 'no-store' },
  );
  const books = await res.json();
  console.log(books, books.image_url);
  
  return (
    <div className="w-10/12 mx-auto grid grid-cols-4 ">
      {books.slice(0, 4).map((book) => (
        <div key={book.id} className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <Image
              src={book.image_url}
              width={300}
              height={400}
              alt={book.title}
              className="rounded-xl object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedBooks;
