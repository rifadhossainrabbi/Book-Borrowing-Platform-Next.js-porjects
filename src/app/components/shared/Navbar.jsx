'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavImage from '../../assets/booknest-logo-navbar.png';
import { authClient } from '@/app/lib/auth-client';
import useAvatar from '../../assets/user.png';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // const handleLogout = async () => {
  //   await authClient.signOut({
  //     fetchOptions: {
  //       onSuccess: () => {
  //         window.location.href = '/login';
  //       },
  //     },
  //   });
  // };

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
      <div className="navbar text-white container mx-auto shadow-sm">
        {/* navbar start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <Image src={NavImage} alt="NavLogo" className="w-32 md:w-40" />
          </Link>
        </div>

        {/* Navbar middle */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {navItems}
          </ul>
        </div>

        {/*navbar last  */}
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <p className="text-xs text-gray-400">Welcome,</p>
                <p className="text-sm font-bold">{user.name}</p>
              </div>

              <div className="avatar">
                <div className="w-10 rounded-full ring ring-amber-400 ring-offset-base-100 ring-offset-2">
                  <Image
                    src={user?.image || useAvatar}
                    alt="User"
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              <button
                onClick={async () => await authClient.signOut()}
                className="btn btn-sm md:btn-md bg-amber-400 hover:bg-amber-500 border-none text-[#011732] font-bold">
                Logout
              </button>
            </div>
          ) : (
            <Link href={'/login'}>
              <button className="btn bg-amber-400 hover:bg-amber-500 border-none text-[#011732] font-bold px-6 text-lg">
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
