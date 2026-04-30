import Link from 'next/link';
import React from 'react';

const ButtonCategory = ({ category }) => {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href="/all-books"
        className={`btn ${!category ? 'btn-neutral' : 'btn-outline'}`}>
        All Categories
      </Link>
      <Link
        href="/all-books?category=story"
        className={`btn ${category === 'story' ? 'btn-primary' : 'btn-outline btn-primary'}`}>
        Story
      </Link>
      <Link
        href="/all-books?category=tech"
        className={`btn ${category === 'tech' ? 'btn-secondary' : 'btn-outline btn-secondary'}`}>
        Tech
      </Link>
      <Link
        href="/all-books?category=science"
        className={`btn ${category === 'science' ? 'btn-accent' : 'btn-outline btn-accent'}`}>
        Science
      </Link>
    </div>
  );
};

export default ButtonCategory;