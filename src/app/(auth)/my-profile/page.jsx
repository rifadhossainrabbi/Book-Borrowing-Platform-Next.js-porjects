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
      <div className="min-h-[80vh] bg-[#0e0c10] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-purple-500"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e0c10] py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-md md:max-w-lg mx-auto bg-[#121212] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
        {/* Profile header */}
        <div className="px-6 md:px-8 pt-8 pb-6 border-b border-white/5">
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
              <div className="w-full h-full rounded-full bg-purple-600 flex items-center justify-center text-3xl font-bold text-white uppercase border-4 border-zinc-800 shadow-lg">
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

          {/* modal start */}
          <div>
            {/* Modal main button */}
            <label
              htmlFor="update_info_modal"
              className="btn  border border-amber-600 hover:bg-linear-to-r from-amber-300 via-amber-800 to-amber-800 text-amber-600 hover:text-white w-full h-14 rounded-2xl text-lg font-bold mt-8 shadow-lg shadow-amber-600/20 cursor-pointer flex items-center justify-center transition-all duration-300 active:scale-95">
              Update Information
            </label>

            {/* Modal Body */}
            <input
              type="checkbox"
              id="update_info_modal"
              className="modal-toggle"
            />
            <div className="modal" role="dialog">
              <div className="modal-box max-w-md bg-[#121212] rounded-[2.5rem] p-6 md:p-8 border border-white/10 shadow-2xl">
                {/* Modal Header */}
                <div className="flex items-center gap-4 mb-8">
                  <label
                    htmlFor="update_info_modal"
                    className="cursor-pointer p-1 rounded-full hover:bg-white/5 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-400">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </label>
                  <h3 className="text-xl font-bold text-white">
                    Update Information
                  </h3>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      defaultValue={user?.image}
                      placeholder="Enter image link"
                      className="input input-bordered w-full h-14 rounded-xl bg-zinc-900/50 border-white/10 focus:outline-none focus:border-purple-500 text-white placeholder:text-gray-600 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.name}
                      placeholder="Enter your name"
                      className="input input-bordered w-full h-14 rounded-xl bg-zinc-900/50 border-white/10 focus:outline-none focus:border-purple-500 text-white placeholder:text-gray-600 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn bg-purple-600 hover:bg-purple-700 text-white w-full h-14 rounded-xl border-none text-lg font-bold mt-4 shadow-lg shadow-purple-600/20 flex items-center justify-center transition-all duration-300 active:scale-95">
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
