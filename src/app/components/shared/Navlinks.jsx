'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlinks = ({ href, children }) => {
  const pathname = usePathname();
  console.log(pathname, 'Pathname');

  // Conditional korar jonno
  const isActive = href === pathname;
  return (
    // Navbar er Active design korar jonno eita banano hoyase
    <Link
      href={href}
      className={`${isActive && 'border-b-2 border-amber-600 text-amber-500'}`}>
      {children}
    </Link>
  );
};

export default Navlinks;