import { MdOutlineArrowOutward } from 'react-icons/md';

const JoinCommunity = () => {
  return (
    <div className="bg-[#141225] w-full">
      <div className="container mx-auto p-10 flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          {/* left side */}
          <div className="flex-1">
            {/* heading */}
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Join Our Growing Community of Readers
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Connect with thousands of book lovers. Share reviews, discover new
              reads, and participate in monthly reading challenges — all in one
              place.
            </p>

            {/* already join people */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#5d5cfc] flex items-center justify-center text-xs font-bold text-white border-2 border-[#141225]">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center text-xs font-bold text-white border-2 border-[#141225]">
                  MR
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ef4444] flex items-center justify-center text-xs font-bold text-white border-2 border-[#141225]">
                  SK
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1e40af] flex items-center justify-center text-xs font-bold text-white border-2 border-[#141225]">
                  AT
                </div>
                <div className="w-10 h-10 rounded-full bg-[#3b0764] flex items-center justify-center text-xs font-bold text-[#a78bfa] border-2 border-[#141225]">
                  +2k
                </div>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                already joined
              </p>
            </div>

            {/* join now button */}
            <button className="flex items-center gap-2 border border-amber-600 hover:bg-linear-to-r from-amber-300 via-amber-800 to-amber-800 text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-white transition-all duration-300">
              Join Now <MdOutlineArrowOutward className="text-xl" />
            </button>
          </div>

          {/* right side */}
          <div className="flex-1">
            {/* 4 item grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1e1a33] p-8 rounded-xl flex flex-col justify-center">
                <h1 className="text-[#fdee7e] text-4xl font-bold mb-1">12k+</h1>
                <p className="text-gray-400 text-sm">Active members</p>
              </div>

              <div className="bg-[#1e1a33] p-8 rounded-xl flex flex-col justify-center">
                <h1 className="text-[#fdee7e] text-4xl font-bold mb-1">4.8k</h1>
                <p className="text-gray-400 text-sm">Books Shared</p>
              </div>

              <div className="bg-[#1e1a33] p-8 rounded-xl flex flex-col justify-center">
                <h1 className="text-[#fdee7e] text-4xl font-bold mb-1">320+</h1>
                <p className="text-gray-400 text-sm">Monthly reviews</p>
              </div>

              <div className="bg-[#1e1a33] p-8 rounded-xl flex flex-col justify-center">
                <h1 className="text-[#fdee7e] text-4xl font-bold mb-1">18</h1>
                <p className="text-gray-400 text-sm">Reading
                  clubs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
