import Link from 'next/link';
import React from 'react';
import allCategory from '../../assets/select-all.png';
import storyCategory from '../../assets/story-telling.png';
import techCategory from '../../assets/atom.png';
import scienceCategory from '../../assets/project-management.png';
import Image from 'next/image';

const ButtonCategory = ({ category }) => {
  // for better responsive
  const baseClass =
    'flex items-center justify-start gap-2 lg:gap-3 px-3 py-1.5 md:px-4 md:py-2.5 lg:px-5 lg:py-3 rounded-lg lg:rounded-xl text-xs md:text-sm lg:text-base font-medium transition-all border';

  const commonClass = `${baseClass} border-amber-600 bg-linear-to-r from-amber-300 via-amber-700 to-amber-800 text-white`;
  const commonClass2 = `${baseClass} text-amber-600 border-amber-500 hover:bg-amber-600/10`;

  return (
    <div className="flex flex-row lg:flex-col gap-2 lg:gap-3 whitespace-nowrap lg:whitespace-normal">
      {/* All Categories */}
      <Link
        href="/all-books"
        className={`${!category ? `${commonClass}` : `${commonClass2}`}`}>
        <Image
          src={allCategory}
          alt="All Category"
          width={24}
          height={24}
          className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        />
        <span>All Categories</span>
      </Link>

      {/* Story */}
      <Link
        href="/all-books?category=story"
        className={`${category === 'story' ? `${commonClass}` : `${commonClass2}`}`}>
        <Image
          src={storyCategory}
          alt="Story"
          width={24}
          height={24}
          className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        />
        <span>Story</span>
      </Link>

      {/* Tech */}
      <Link
        href="/all-books?category=tech"
        className={`${category === 'tech' ? `${commonClass}` : `${commonClass2}`}`}>
        <Image
          src={techCategory}
          alt="Tech"
          width={24}
          height={24}
          className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        />
        <span>Tech</span>
      </Link>

      {/* Science */}
      <Link
        href="/all-books?category=science"
        className={`${category === 'science' ? `${commonClass}` : `${commonClass2}`}`}>
        <Image
          src={scienceCategory}
          alt="Science"
          width={24}
          height={24}
          className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
        />
        <span>Science</span>
      </Link>
    </div>
  );
};

export default ButtonCategory;
