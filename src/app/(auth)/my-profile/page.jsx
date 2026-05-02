'use client';

import Image from 'next/image';
import { authClient } from '@/app/lib/auth-client';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Information table er data
  const profileInfoItems = [
    { label: 'Name', value: user?.name },
    { label: 'Email', value: user?.email },
    { label: 'Photo URL', value: user?.image || 'Not Provided' },
    { label: 'User ID', value: user?.id },
  ];

  // form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const image = formData.get('image');

    const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message || 'Failed to update');
    } else {
      toast.success('Profile updated successfully!');
      const modalCheckbox = document.getElementById('update_info_modal');
      if (modalCheckbox) modalCheckbox.checked = false;
    }
  };

  if (isPending) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-[2.5rem] overflow-hidden border border-gray-300 shadow-sm">
        {/* Profile header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#0f172a]">My Profile</h1>
        </div>

        {/* user name and image */}
        <div className="p-8 flex items-center gap-5">
          <div className="relative w-24 h-24 shrink-0">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name || 'User'}
                fill
                className="rounded-full object-cover border-2 border-gray-50 shadow-sm"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-amber-500 flex items-center justify-center text-3xl font-bold text-white uppercase border-4 border-gray-50">
                {user?.name?.[0]}
              </div>
            )}
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
            <p className="text-gray-500 text-sm font-medium">{user?.email}</p>
          </div>
        </div>

        {/* info table */}
        <div className="px-8 pb-8">

          {/* info */}
          <h3 className="text-lg font-bold text-gray-800 mb-4">Information</h3>
          <div className="rounded-2xl border border-gray-100 overflow-hidden">
            {profileInfoItems.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-4 bg-white ${index !== profileInfoItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <span className="text-sm font-semibold text-gray-400">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-gray-700 truncate max-w-[180px] text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* modal start */}
          <div>
            {/* Modal main button */}
            <label
              htmlFor="update_info_modal"
              className="btn bg-[#011732] hover:bg-black text-white w-full h-14 rounded-2xl border-none text-lg font-bold mt-8 shadow-sm cursor-pointer flex items-center justify-center transition-none">
              Update Information
            </label>

            {/* Modal Body */}
            <input
              type="checkbox"
              id="update_info_modal"
              className="modal-toggle"
            />
            <div className="modal" role="dialog">
              <div className="modal-box max-w-md bg-white rounded-[2.5rem] p-8 border-none shadow-2xl">
                {/* Modal Header */}
                <div className="flex items-center gap-4 mb-8">
                  <label
                    htmlFor="update_info_modal"
                    className="cursor-pointer p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-700">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </label>
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    Update Information
                  </h3>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1e293b] mb-2 ml-1">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      defaultValue={user?.image}
                      placeholder="Enter image link"
                      className="input input-bordered w-full h-14 rounded-xl border-gray-200 focus:outline-none focus:border-gray-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1e293b] mb-2 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.name}
                      placeholder="Enter your name"
                      className="input input-bordered w-full h-14 rounded-xl border-gray-200 focus:outline-none focus:border-gray-400 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn bg-[#011732] hover:bg-black text-white w-full h-14 rounded-xl border-none text-lg font-bold mt-4 shadow-md flex items-center justify-center">
                    Update Information
                  </button>
                </form>
              </div>
              <label className="modal-backdrop" htmlFor="update_info_modal">
                Close
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
