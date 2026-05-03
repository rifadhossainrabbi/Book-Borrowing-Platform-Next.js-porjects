import Image from 'next/image';
import Link from 'next/link';
import NavImage from '../../assets/booknest-logo-navbar.png';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#011732] text-white pt-16 pb-8 border-t border-gray-800 text-center md:text-left">
      <div className="w-10/12 mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-12">
          {/* 1. logo and social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={NavImage}
                alt="BookNest Logo"
                width={140}
                height={40}
                priority
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your digital library for discovering, borrowing, and enjoying
              books.
            </p>
            {/* social icons */}
            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookSquare size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <FaSquareXTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <FaInstagramSquare size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* quick links */}
          <div className="lg:pl-12">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="hover:text-white transition-colors">
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="hover:text-white transition-colors">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* categories */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <button className="hover:text-white transition-colors">
                  Story
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Tech
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Science
                </button>
              </li>
            </ul>
          </div>

          {/* contact us */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <p>Email: support@booknest.com</p>
              <p>Phone: +880 1234 567890</p>
              <p className="leading-relaxed">
                Address: 123 Book Street, <br /> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BookNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
