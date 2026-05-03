'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Roboto_Slab } from 'next/font/google';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
});

const Banner = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://book-borrowing-platform-next-js-por.vercel.app/data.json',
      );
      const data = await res.json();

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  return (
    // main div
    <div className="bg-[#0e0c10] overflow-hidden w-full">
      <div className="container mx-auto px-4 md:px-8">

        {/* child div */}
        <div className="min-h-fit md:min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20 relative">
          {/* left side text section*/}
          <div className="space-y-6 text-white w-full md:w-3/5 z-10 text-center md:text-left">
            <p className="border border-purple-600 bg-transparent text-purple-500 inline-block px-4 py-1.5 rounded-lg font-bold uppercase text-sm tracking-widest">
              Discover. Borrow. Enjoy.
            </p>

            <h1
              className={`text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.1] ${robotoslab.className}`}>
              Find Your <br />
              <span className="bg-linear-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                Next Read
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed mx-auto md:mx-0 px-4 md:px-0">
              Explore thousands of books across Story, Tech, and Science. Check
              out our newest arrivals and start your journey!
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              <button className="group flex items-center gap-3 bg-transparent border-2 border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white px-10 h-14 rounded-full font-bold text-lg transition-all duration-300">
                Browse Now
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* right side image swiper section */}
          <div className="w-full md:w-2/5 flex justify-center z-10">
            {loading ? (
              <div className="w-[260px] h-[360px] bg-zinc-900 animate-pulse rounded-3xl border border-zinc-800 flex items-center justify-center">
                <span className="text-zinc-600 font-medium">
                  Loading Books...
                </span>
              </div>
            ) : (
              <div className="relative">
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[Autoplay, EffectCards]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="w-[260px] h-[360px] md:w-[300px] md:h-[400px]">
                  {friends.slice(0, 6).map((book) => (
                    <SwiperSlide
                      key={book.id}
                      className="rounded-2xl shadow-2xl bg-zinc-900 overflow-hidden">
                      <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
