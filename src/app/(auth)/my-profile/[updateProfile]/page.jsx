'use client';
import { useParams, useRouter } from 'next/navigation';
import { authClient } from '@/app/lib/auth-client';
import toast from 'react-hot-toast';
import { useState } from 'react';

const UpdateProfile = () => {
  const { updateProfile } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const nameValue = e.target.name.value || user?.name;
    const imageValue = e.target.image.value || user?.image;

    const { data, error } = await authClient.updateUser({
      name: nameValue,
      image: imageValue,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Profile updated successfully');
      router.push('/my-profile');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center p-4">
      <div className="p-8 rounded-xl border border-amber-600 shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          <span className="bg-linear-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
            Update Profile
          </span>
        </h2>

        <form className="space-y-4" onSubmit={handleUpdate}>
          {/* Name input */}
          <fieldset className="fieldset">
            <legend className="text-gray-400 font-semibold mb-1">
              Full Name
            </legend>
            <input
              name="name"
              type="text"
              defaultValue={user?.name}
              className="input w-full bg-zinc-900 border-zinc-700 focus:border-amber-600 text-white p-2 rounded-md outline-none"
              placeholder="Enter your name"
            />
          </fieldset>

          {/* Photo URL input */}
          <fieldset className="fieldset w-full">
            <legend className="text-gray-400 font-semibold mb-1">
              Photo URL
            </legend>
            <input
              name="image"
              type="text"
              className="input w-full bg-zinc-900 border-zinc-700 focus:border-amber-600 text-white p-2 rounded-md outline-none"
              placeholder="Enter photo URL"
            />
          </fieldset>

          <button
            disabled={loading}
            className="btn border border-amber-600 bg-amber-600 hover:bg-amber-700 text-white w-full h-10 rounded-md text-lg font-bold mt-4 transition-all">
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
