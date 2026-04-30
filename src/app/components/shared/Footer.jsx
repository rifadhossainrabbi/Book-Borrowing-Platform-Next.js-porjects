import Image from 'next/image';

import NavImage from '../../assets/booknest-logo-navbar.png';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  const navItems = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/all-books'}>All Books</Link>
      </li>
      <li>
        <Link href={'my-profile'}>My Profile</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#011732] text-white px-15 w-10/12 mx-auto mb-12">
      {/* Right side logo and social links */}
      <div className="flex justify-between mb-4 mt-10">
        <div className="space-y-4">
          <Link href={'/'}>
            <Image src={NavImage} alt="NavLogo" />
          </Link>
          <p className="text-gray-300">
            Your digital library for discovering,{' '}
            <br className="hidden md:flex" />
            borrowing, and enjoying books.
          </p>
          {/* Socila links */}
          <div className="flex gap-3">
            <a href="">
              <FaFacebookSquare color="white" size={30} />
            </a>
            <a href="">
              <FaSquareXTwitter color="white" size={30} />
            </a>
            <a href="">
              <FaInstagramSquare color="white" size={30} />
            </a>
            <a href="">
              <FaLinkedin color="white" size={30} />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <ul className="space-y-3 text-gray-300">{navItems}</ul>
        </div>
        {/* Categories */}
        <div className="space-y-4 text-gray-300">
          <h1 className="text-xl font-semibold text-white">Categories</h1>
          <p>Story</p>
          <p>Tech</p>
          <p>Science</p>
        </div>
        {/* Contact */}
        <div className="space-y-4 text-gray-300">
          <h1 className="text-xl font-semibold text-white">Contact Us</h1>
          <p>Email: rifatraihansha@gmail.com</p>
          <p>Phone: 013++++++++</p>
          <p>Address: 123 Book Street, Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="text-gray-300 border-t-2 border-gray-600 py-2 text-center">
        <p>©2026 BookNest. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
