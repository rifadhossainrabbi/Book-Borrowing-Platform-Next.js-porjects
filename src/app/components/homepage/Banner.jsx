import { FaArrowRight } from 'react-icons/fa';
import { Roboto_Slab } from 'next/font/google';

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
});

const Banner = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto px-4 md:px-0">
      <div className="h-[50vh] md:h-[60vh] bg-[url('/banner.png')] bg-cover bg-center px-6 md:px-16 flex items-center">
        <div className="space-y-4 md:space-y-7">
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight ${robotoslab.className}`}>
            Find Your <br className="hidden sm:block" /> Next Read
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-md">
            Explore thousands of books across <br className="hidden sm:block" />{' '}
            Story!, Tech, and Science.
          </p>

          <button className="btn bg-black text-white border-none hover:bg-gray-800 flex items-center gap-2 px-6">
            Browse Now
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
