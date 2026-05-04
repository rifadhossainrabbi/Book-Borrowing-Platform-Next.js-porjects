import SearchInput from '@/app/components/allbookspage/SearchInput';
import ButtonCategory from '@/app/components/shared/ButtonCategory';
import { getBooks } from '@/app/lib/data';

const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const books = await getBooks();

  return (
    <div className="bg-[#0e0c10] min-h-screen">
      <div className="flex flex-col lg:flex-row w-full lg:w-11/12 xl:w-10/12 mx-auto h-full lg:h-screen lg:overflow-hidden">
        {/* button category */}
        <div className="hidden lg:block lg:w-3/12 xl:w-2/12 bg-[#0e0c10] p-6 border-r border-white/5 h-full overflow-y-auto">
          <h1 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
            Categories
          </h1>
          <ButtonCategory category={category} />
        </div>

        {/* all books and searchbar */}
        <div className="w-full lg:w-9/12 xl:w-10/12 flex flex-col h-full lg:overflow-y-auto">
          <SearchInput allBooks={books} currentCategory={category} />
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
