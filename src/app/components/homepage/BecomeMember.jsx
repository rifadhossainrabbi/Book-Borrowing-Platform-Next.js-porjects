import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { GoClock, GoNote } from 'react-icons/go';
import { MdOutlineArrowOutward } from 'react-icons/md';

const BecomeMember = () => {
  return (
    <div className="bg-[#060b13] w-full">
      <div className="container mx-auto p-10 flex items-center justify-center">
        {/* main div */}
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* left side */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-5 tracking-tight">
              Become a Member & Unlock More
            </h1>
            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Get access to exclusive books, early releases, and premium
              features with a BookNest membership plan.
            </p>

            <div className="space-y-4 mb-8">
              {/* Free Plan Card */}
              <div className="border border-slate-800 bg-[#0f172a]/30 rounded-xl p-5 flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-semibold text-white">Free</h1>
                  <p className="text-slate-500 text-sm">
                    Browse & borrow up to 3 books
                  </p>
                </div>
                <div className="text-right">
                  <h1 className="text-2xl font-bold text-white">$0</h1>
                  <p className="text-slate-500 text-xs tracking-wide">
                    / month
                  </p>
                </div>
              </div>

              {/* Premium Plan Card */}
              <div className="border-2 border-amber-800 bg-[#1e1b4b]/20 rounded-xl p-5 flex justify-between items-center shadow-lg shadow-indigo-500/5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-xl font-semibold text-white">
                      Premium
                    </h1>
                    <span className="bg-[#312e81] text-[#a5b4fc] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Popular
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm font-medium">
                    Unlimited borrows + early access
                  </p>
                </div>
                <div className="text-right">
                  <h1 className="text-2xl font-bold text-white">$4.99</h1>
                  <p className="text-slate-500 text-xs tracking-wide">
                    / month
                  </p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 w-fit px-8 py-3  border border-amber-600 hover:bg-linear-to-r from-amber-300 via-amber-800 to-amber-800 text-amber-600 hover:text-white rounded-xl font-semibold hover:bg-white hover:text-[#060b13] transition-all duration-300 mb-6">
              Learn More <MdOutlineArrowOutward className="text-xl" />
            </button>

            <p className="text-slate-500 text-sm font-medium">
              No credit card required for free plan.
            </p>
          </div>

          {/* right side */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            {/* cards */}

            {/* Feature 1 */}
            <div className="flex items-start gap-5">
              <div className="bg-[#1e1b4b] p-3 rounded-xl text-indigo-400">
                <GoNote size={24} />
              </div>
              <div>
                <h1 className="text-white text-lg font-semibold mb-1">
                  Unlimited borrowing
                </h1>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Borrow as many titles as you want with no monthly cap.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-5">
              <div className="bg-[#064e3b]/30 p-3 rounded-xl text-emerald-500 border border-emerald-500/20">
                <FaRegStar size={24} />
              </div>
              <div>
                <h1 className="text-white text-lg font-semibold mb-1">
                  Early access to new arrivals
                </h1>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Read new titles before they go public.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-5">
              <div className="bg-[#450a0a]/40 p-3 rounded-xl text-rose-500 border border-rose-500/20">
                <GoClock size={24} />
              </div>
              <div>
                <h1 className="text-white text-lg font-semibold mb-1">
                  Extended borrow period
                </h1>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Keep books for 30 days instead of the standard 14.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-5">
              <div className="bg-[#172554] p-3 rounded-xl text-blue-400 w-[48px] h-[48px] flex items-center justify-center font-bold text-xl">
                A
              </div>
              <div>
                <h1 className="text-white text-lg font-semibold mb-1">
                  Exclusive member discounts
                </h1>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Special offers and partner deals every month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMember;
