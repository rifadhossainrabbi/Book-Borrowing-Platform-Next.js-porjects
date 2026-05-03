import SearchInput from '@/app/components/allbookspage/SearchInput';
import ButtonCategory from '@/app/components/shared/ButtonCategory';
import { getBooks } from '@/app/lib/data';

const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const books = await getBooks();

  return (
    // container div
    <div className="bg-[#0e0c10]">
      {/* main container */}
      <div className="flex flex-col md:flex-row w-full lg:w-10/12 mx-auto md:h-screen md:overflow-hidden">
        {/* Category buttons */}
        <div className="w-full md:w-3/12 lg:w-2/12 bg-[#0e0c10] p-5 md:p-6 md:border-r border-white/5 h-auto md:h-full overflow-y-auto">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
            Categories
          </h1>
          <ButtonCategory category={category} />
        </div>

        {/* Search input and all books */}
        <div className="w-full md:w-9/12 lg:w-10/12 flex flex-col bg-[#0e0c10] md:h-full overflow-y-auto">
          <div className="p-4 md:p-0">
            <SearchInput allBooks={books} currentCategory={category} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllBooksPage;
