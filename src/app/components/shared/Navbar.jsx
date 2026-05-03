'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavImage from '../../assets/booknest-logo-navbar.png';
import { authClient } from '@/app/lib/auth-client';
import Navlinks from './Navlinks';
import { usePathname, useRouter } from 'next/navigation'; 

const Navbar = () => {
  const pathname = usePathname(); 
  const router = useRouter(); 
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          const privatePaths = ['/my-profile', '/all-books/:path*'];
          const isPrivatePage = privatePaths.some((path) =>
            pathname.startsWith(path),
          );

          if (isPrivatePage) {
            router.push('/login');
          } else {
            router.refresh();
          }
        },
      },
    });
  };

  return (
    <div className="bg-black sticky top-0 z-[100]">
      <div className="text-white container py-2 flex mx-auto shadow-sm px-4 md:px-8">
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
              <li>
                <Navlinks href={'/'}>Home</Navlinks>
              </li>
              <li>
                <Navlinks href={'/all-books'}>All Books</Navlinks>
              </li>
              <li>
                <Navlinks href={'/my-profile'}>My Profile</Navlinks>
              </li>
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
            <li>
              <Navlinks href={'/'}>Home</Navlinks>
            </li>
            <li>
              <Navlinks href={'/all-books'}>All Books</Navlinks>
            </li>
            <li>
              <Navlinks href={'/my-profile'}>My Profile</Navlinks>
            </li>
          </ul>
        </div>

        {/*navbar last  */}
        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:block text-right">
                <p className="text-xs text-gray-400">Welcome,</p>
                <p className="text-sm font-bold">{user.name}</p>
              </div>

              <Link href={'/my-profile'}>
                <div className="avatar">
                  <div className="w-8 md:w-10 rounded-full ring ring-[#6335c6] flex items-center justify-center bg-[#6335c6] text-white overflow-hidden">
                    {user?.image ? (
                      <Image
                        src={user?.image}
                        alt={user?.name}
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
              </Link>

              <button
                onClick={handleLogout} 
                className="btn btn-xs md:btn-md bg-[#6335c6] hover:bg-[#6c3bd7] border-none text-white text-sm font-bold">
                Logout
              </button>
            </div>
          ) : (
            <Link href={'/login'}>
              <button className="btn btn-sm md:btn-md bg-[#6335c6] hover:bg-[#6c3bd7] border-none text-white font-bold px-4 md:px-6">
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
