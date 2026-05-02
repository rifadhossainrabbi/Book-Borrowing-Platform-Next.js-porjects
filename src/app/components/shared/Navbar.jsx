'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavImage from '../../assets/booknest-logo-navbar.png';
import { authClient } from '@/app/lib/auth-client';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(session, "Session from Navbar");

  const navItems = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/all-books'}>All Books</Link>
      </li>
      <li>
        <Link href={'/my-profile'}>My Profile</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#011732]">
      {/* navbar */}
      <div className="navbar text-white container mx-auto shadow-sm px-2 md:px-4">
        {/* navbar start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#011732] rounded-box z-[1] mt-3 w-52 p-2 shadow border border-gray-700">
              {navItems}
            </ul>
          </div>
          <Link href={'/'} className="flex items-center">
            <Image
              src={NavImage}
              alt="NavLogo"
              className="w-24 sm:w-32 md:w-40"
            />
          </Link>
        </div>

        {/* navbar middle */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {navItems}
          </ul>
        </div>

        {/*navbar last  */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:block text-right">
                <p className="text-xs text-gray-400">Welcome,</p>
                <p className="text-sm font-bold">{user.name}</p>
              </div>

              <div className="avatar">
                <div className="w-8 md:w-10 rounded-full ring ring-amber-400 flex items-center justify-center bg-amber-500 text-[#011732] overflow-hidden">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-bold uppercase">
                      {user?.name?.[0]}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={async () => await authClient.signOut()}
                className="btn btn-xs md:btn-md bg-amber-400 hover:bg-amber-500 border-none text-[#011732] text-xl font-bold">
                Logout
              </button>
            </div>
          ) : (
            <Link href={'/login'}>
              <button className="btn btn-sm md:btn-md bg-amber-400 hover:bg-amber-500 border-none text-[#011732] font-bold px-4 md:px-6 md:text-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
