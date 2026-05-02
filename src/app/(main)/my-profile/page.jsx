'use client';

import Image from 'next/image';
import { authClient } from '@/app/lib/auth-client';

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // information er jonno
  const profileInfoItems = [
    { label: 'Name', value: user?.name },
    { label: 'Email', value: user?.email },
    { label: 'Photo URL', value: user?.image || 'Not Provided' },
    { label: 'User ID', value: user?.id },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-[2.5rem] overflow-hidden border border-gray-300">
        {/* Header Section */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-400">
          <h1 className="text-2xl font-bold text-[#0f172a]">My Profile</h1>
        </div>

        {/* user image and name */}
        <div className="p-8 flex items-center gap-5">
          <div className="relative w-24 h-24 shrink-0">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="rounded-full object-cover shadow-sm"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-amber-500 flex items-center justify-center text-3xl font-bold text-white border-4 border-gray-100 uppercase">
                {user?.name?.[0]}
              </div>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium">{user?.email}</p>
          </div>
        </div>

        {/* user info table */}
        <div className="px-8 pb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Information</h3>

          <div className="space-y-0 rounded-2xl border border-gray-100 overflow-hidden">
            {/* info by map */}
            {profileInfoItems.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors ${
                  index !== profileInfoItems.length - 1
                    ? 'border-b border-gray-100'
                    : ''
                }`}>
                <span className="text-sm font-semibold text-gray-400">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-gray-700 truncate max-w-[180px] text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* updtae data section */}
          {/* The button to open modal */}
          <label htmlFor="my_modal_6" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">This modal works with a hidden checkbox!</p>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
