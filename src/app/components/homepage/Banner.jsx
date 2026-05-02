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
      // console.log(data, 'Data from UseEffect');

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full md:w-10/12 mx-auto px-4 md:px-0 mt-6">
      <div className="min-h-[50vh] md:h-[60vh] bg-[#011732] rounded-3xl px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 py-10">
        {/* left side text */}
        <div className="space-y-4 md:space-y-7 text-white w-full md:w-1/2">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight ${robotoslab.className}`}>
            Find Your <br /> Next Read
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-md">
            Explore thousands of books across Story, Tech, and Science. Check
            out our newest arrivals!
          </p>
          <button className="btn bg-amber-400 text-[#011732] border-none hover:bg-amber-500 flex items-center gap-2 px-8 font-bold">
            Browse Now <FaArrowRight />
          </button>
        </div>

        {/* right side swiper image */}
        <div className="w-full md:w-1/3 flex justify-center">
          {loading ? (
            <div className="w-[240px] h-[320px] bg-gray-700 animate-pulse rounded-2xl flex items-center justify-center">
              <span className="text-gray-400">Loading Books...</span>
            </div>
          ) : (
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[Autoplay, EffectCards]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="w-[240px] h-[320px] md:w-[280px] md:h-[380px]">
              {friends.slice(0, 4).map((book) => (
                <SwiperSlide
                  key={book.id}
                  className="rounded-2xl shadow-2xl bg-white">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    className="rounded-2xl object-cover border-4 border-white/10"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
