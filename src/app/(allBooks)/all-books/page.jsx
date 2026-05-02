import SearchInput from '@/app/components/allbookspage/SearchInput';
import ButtonCategory from '@/app/components/shared/ButtonCategory';
import { getBooks } from '@/app/lib/data';

const AllBooksPage = async ({ searchParams }) => {
  //searchParams theke category access
  const { category } = await searchParams;
  // data.js theke book er json export 
  const books = await getBooks();

  return (
    <div className="flex flex-col md:flex-row w-full lg:w-10/12 mx-auto h-screen overflow-hidden">
      {/* left category section */}
      <div className="w-full md:w-3/12 lg:w-2/12 bg-[#f9f9fa] p-4 md:p-6 overflow-y-auto">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b pb-3">
          Categories
        </h1>
        <ButtonCategory category={category} />
      </div>

      {/* right side book list */}
      <div className="w-full md:w-9/12 lg:w-10/12 flex flex-col h-full bg-[#fefefe]">
        {/*data SearchInput a pathay seikhan theke filter kore sorasori use kora hoyase*/}
        <SearchInput allBooks={books} currentCategory={category} />
      </div>
    </div>
  );
};

export default AllBooksPage;
