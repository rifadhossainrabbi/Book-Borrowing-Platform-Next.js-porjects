'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Roboto_Slab } from 'next/font/google';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// images
import bgimage1 from '../../assets/banner-bg.png';
import bgimage2 from '../../assets/banner-bg-3.avif';
import bgimage3 from '../../assets/banner-bg-7.webp';
import bgimage4 from '../../assets/banner-bg-5.jpg';

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
});

const Banner = () => {
  const bgImages = [bgimage1, bgimage2, bgimage3, bgimage4];

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://book-borrowing-platform-next-js-por.vercel.app/data.json',
      );
      const data = await res.json();

      setTimeout(() => {
        setBooks(data);
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  return (
    // parent div
    <div className="bg-black">
      {/* main container */}
      <div className="relative container mx-auto overflow-hidden min-h-fit md:h-[70vh]">
        {/* background image slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect={'fade'}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full">
            {bgImages.map((img, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* text content section */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 h-full">
          <div className="min-h-fit md:h-full flex flex-col md:flex-row items-center justify-between gap-10 py-16">
            {/* left side text */}
            <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
              <h1
                className={`text-4xl md:text-7xl font-bold text-white/60 leading-tight drop-shadow-2xl ${robotoslab.className}`}>
                Find Your <br />
                <span className="bg-linear-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
                  Next Read
                </span>
              </h1>
              <p className="text-white text-lg md:text-xl max-w-lg leading-relaxed drop-shadow-md">
                Explore thousands of books across different categories and
                borrow your favorite ones.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <div className="inline-block p-[2px] rounded-full bg-linear-to-r from-amber-500 to-blue-500">
                  <button className="group relative flex items-center gap-3 px-10 h-14 rounded-full font-bold text-lg text-white bg-black">
                    <span className="absolute inset-0 rounded-full p-[1px] bg-gredient-to-r from-amber-500 to-blue-500">
                      <span className="block h-full w-full rounded-full bg-transparent group-hover:bg-amber-600 transition-all duration-300"></span>
                    </span>

                    <span className="relative flex items-center gap-3 text-amber-500 group-hover:text-white">
                      Browse Now
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* right side pick card */}
            <div className="w-full md:w-auto flex justify-center">
              {!loading && books.length > 0 ? (
                <div className="bg-black/60 backdrop-blur-lg p-6 rounded-2xl border border-white/20 w-full max-w-[380px] shadow-2xl">
                  <p className="text-gray-300 text-[10px] uppercase tracking-[3px] mb-4 font-bold">
                    Today's Pick
                  </p>
                  <div className="flex gap-4">
                    <div className="relative w-24 h-36 flex-shrink-0">
                      <Image
                        src={books[0].image_url}
                        alt="book"
                        fill
                        className="object-cover rounded shadow-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">
                        {books[0].title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {books[0].author}
                      </p>
                      <div className="flex items-center gap-1 mt-3 text-[#f3a847]">
                        <FaStar size={12} />
                        <FaStar size={12} />
                        <FaStar size={12} />
                        <FaStar size={12} />
                        <span className="text-white text-xs ml-2">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-[300px] h-44 bg-white/10 animate-pulse rounded-2xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
