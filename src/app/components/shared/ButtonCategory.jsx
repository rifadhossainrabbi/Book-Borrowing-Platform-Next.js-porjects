import Link from 'next/link';
import React from 'react';
import { TiThSmallOutline } from 'react-icons/ti';

const ButtonCategory = ({ category }) => {
  return (
    <div className="flex md:flex-col gap-3">
      <Link
        href="/all-books"
        className={`btn ${!category ? 'bg-purple-500' : 'btn-outline'}`}>
        <TiThSmallOutline />
        All Categories
      </Link>
      <Link
        href="/all-books?category=story"
        className={`btn ${category === 'story' ? 'bg-purple-500' : 'btn-outline'}`}>
        Story
      </Link>
      <Link
        href="/all-books?category=tech"
        className={`btn ${category === 'tech' ? 'bg-purple-500' : 'btn-outline'}`}>
        Tech
      </Link>
      <Link
        href="/all-books?category=science"
        className={`btn ${category === 'science' ? 'bg-purple-500' : 'btn-outline'}`}>
        Science
      </Link>
    </div>
  );
};

export default ButtonCategory;