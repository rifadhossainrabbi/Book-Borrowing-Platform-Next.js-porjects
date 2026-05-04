import Link from 'next/link';
import React from 'react';
import allCategory from '../../assets/select-all.png';
import storyCategory from '../../assets/story-telling.png';
import techCategory from '../../assets/atom.png';
import scienceCategory from '../../assets/project-management.png';
import Image from 'next/image';

const ButtonCategory = ({ category }) => {
  const commonClass =
    'border border-amber-600 bg-linear-to-r from-amber-300 via-amber-700 to-amber-800 text-white';
  const commonClass2 = "btn-outline text-amber-600 border-amber-500";
  return (
    <div className="flex md:flex-col gap-3">
      {/* All Categories */}
      <Link
        href="/all-books"
        className={`btn flex items-center justify-start gap-3 ${!category ? `${commonClass}` : `${commonClass2}`}`}>
        <Image
          src={allCategory}
          alt="All Category"
          width={24}
          height={24}
          className="object-contain"
        />
        <span>All Categories</span>
      </Link>

      {/* Story */}
      <Link
        href="/all-books?category=story"
        className={`btn flex items-center justify-start gap-3 ${category === 'story' ? `${commonClass}` : `${commonClass2}`}`}>
        <Image
          src={storyCategory}
          alt="Story"
          width={24}
          height={24}
          className="object-contain"
        />
        <span>Story</span>
      </Link>

      {/* Tech */}
      <Link
        href="/all-books?category=tech"
        className={`btn flex items-center justify-start gap-3 ${category === 'tech' ? `${commonClass}` : `${commonClass2}`}`}>
        <Image
          src={techCategory}
          alt="Tech"
          width={24}
          height={24}
          className="object-contain"
        />
        <span>Tech</span>
      </Link>

      {/* Science */}
      <Link
        href="/all-books?category=science"
        className={`btn flex items-center justify-start gap-3 ${category === 'science' ? `${commonClass}` : `${commonClass2}`}`}>
        <Image
          src={scienceCategory}
          alt="Science"
          width={24}
          height={24}
          className="object-contain"
        />
        <span>Science</span>
      </Link>
    </div>
  );
};

export default ButtonCategory;
