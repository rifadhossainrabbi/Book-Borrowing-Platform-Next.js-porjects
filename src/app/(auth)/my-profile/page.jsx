'use client';

import Image from 'next/image';
import { authClient } from '@/app/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Information table er data
  const profileInfoItems = [
    { label: 'Name', value: user?.name },
    { label: 'Email', value: user?.email },
    { label: 'Photo URL', value: user?.image || 'Not Provided' },
    { label: 'User ID', value: user?.id },
  ];

  if (!session) {
    router.push('/login');
  }

  if (isPending) {
    return (
      <div className="min-h-[80vh] bg-[#0e0c10] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-purple-500"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e0c10] py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-md md:max-w-lg mx-auto bg-[#ffb24712] hover:bg-transparent border border-transparent hover:border-amber-500 rounded-[2.5rem] overflow-hidden shadow-2xl">
        {/* Profile header */}
        <div className="px-6 md:px-8 pt-8 pb-6 border-b border-white/5 flex justify-between items-center">
          <div>
            <Link href={'/'}>
              <button className="hover:cursor-pointer">
                <FaArrowLeft />
              </button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-white text-center sm:text-left">
            My Profile
          </h1>
        </div>

        {/* user name and image */}
        <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div className="relative w-24 h-24 shrink-0">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name || 'User'}
                fill
                className="rounded-full object-cover border-2 border-zinc-800 shadow-lg"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-amber-600 flex items-center justify-center text-3xl font-bold text-white uppercase border-4 border-zinc-800 shadow-lg">
                {user?.name?.[0]}
              </div>
            )}
          </div>
          <div className="space-y-1 mt-2 sm:mt-4">
            <h2 className="text-2xl font-bold text-white">{user?.name}</h2>
            <p className="text-gray-400 text-sm font-medium">{user?.email}</p>
          </div>
        </div>

        {/* info table */}
        <div className="px-6 md:px-8 pb-8">
          {/* info */}
          <h3 className="text-lg font-bold text-white mb-4 text-center sm:text-left">
            Information
          </h3>
          <div className="rounded-2xl border border-white/5 overflow-hidden bg-zinc-900/30">
            {profileInfoItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 gap-1 sm:gap-0 ${index !== profileInfoItems.length - 1 ? 'border-b border-white/5' : ''}`}>
                {/* label */}
                <span className="text-sm font-semibold text-gray-500">
                  {item.label}
                </span>
                {/* user name */}
                <span className="text-sm font-medium text-gray-300 truncate max-w-full sm:max-w-[200px] sm:text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div>
            <Link href={`/my-profile/${user?.id}`}>
              <button className="border border-amber-600 hover:bg-linear-to-r from-amber-300 via-amber-800 to-amber-800 text-amber-600 py-3 rounded-xl font-semibold hover:bg-white hover:text-white transition-all duration-300 mt-4 w-full text-center">
                Update Your Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
