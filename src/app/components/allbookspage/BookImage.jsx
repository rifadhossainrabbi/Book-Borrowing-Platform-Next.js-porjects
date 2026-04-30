'use client';

import Image from 'next/image';
import { useState } from 'react';

const BookImage = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full max-w-sm flex items-center justify-center">
      {loading && <p className="absolute text-red-500">Image Loading...</p>}

      <Image
        src={src}
        alt={alt}
        width={400}
        height={500}
        // data load hole setLoading false hobe r Image Loding dekhabe na
        onLoad={() => setLoading(false)}
        className={`${loading ? 'opacity-0' : 'opacity-100'} rounded-2xl object-cover w-full max-w-sm shadow-lg hover:scale-105 duration-300 outline-2 outline-green-400`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default BookImage;
