import Image from 'next/image';
import Link from 'next/link';
import NavImage from '../../assets/booknest-logo-navbar.png';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FaSquareXTwitter, FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-[#011732] text-white px-6 md:px-12 lg:px-20 pt-16 pb-8">
      {/* Grid Layout: Mobile 1 col, Tablet 3 cols, Desktop 5 cols */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-10">
        {/* Logo & Socials */}
        <div className="space-y-5">
          <Link href={'/'}>
            <Image src={NavImage} alt="NavLogo" width={140} height={40} />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your digital library for discovering,{' '}
            <br className="hidden lg:block" />
            borrowing, and enjoying books.
          </p>
          <div className="flex gap-4">
            <a href="#">
              <FaFacebookSquare size={24} />
            </a>
            <a href="#">
              <FaSquareXTwitter size={24} />
            </a>
            <a href="#">
              <FaInstagramSquare size={24} />
            </a>
            <a href="#">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h1 className="text-lg font-bold">Quick Links</h1>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-books">All Books</Link>
            </li>
            <li>
              <Link href="/my-profile">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h1 className="text-lg font-bold">Categories</h1>
          <div className="space-y-3 text-gray-400 text-sm">
            <p>Story</p>
            <p>Tech</p>
            <p>Science</p>
          </div>
        </div>

        {/* Resources (as seen in pic 09) */}
        <div className="space-y-4">
          <h1 className="text-lg font-bold">Resources</h1>
          <div className="space-y-3 text-gray-400 text-sm">
            <p>Help Center</p>
            <p>FAQs</p>
            <p>Blog</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <h1 className="text-lg font-bold text-white">Contact Us</h1>
          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex items-center gap-3">
              <MdEmail size={18} />
              <span>support@booknest.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={16} />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-start gap-3">
              <FaLocationDot size={18} className="mt-1" />
              <span>
                123 Book Street, <br /> Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-gray-500 border-t border-gray-800 pt-8 text-center text-sm">
        <p>© 2025 BookNest. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
