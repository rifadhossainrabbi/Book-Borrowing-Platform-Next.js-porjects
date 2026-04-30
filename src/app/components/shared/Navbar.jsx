import Image from 'next/image';
import Link from 'next/link';
import NavImage from '../../assets/booknest-logo-navbar.png';

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/all-books"}>All Books</Link>
      </li>
      <li>
        <Link href={"my-profile"}>My Profile</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#011732]">
      <div className="navbar text-white container mx-auto shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <Link href={'/'}>
            <button className='btn bg-transparent border-none shadow-none'>
              <Image src={NavImage} alt="NavLogo" />
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          {/* <Image src={"/"} alt='User'/> */}
          <p>Rifad</p>
          <button className='btn bg-amber-400 border-none px-4 text-xl'>Login</button>
          <button className='btn bg-amber-400 border-none px-4 text-xl'>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
