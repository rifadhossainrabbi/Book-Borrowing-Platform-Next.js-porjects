'use client';
import Image from 'next/image';
import Link from 'next/link';
import GoogleImage from '../../assets/google-logo.png';
import { authClient } from '@/app/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  // signUp a callbackUrl dawa jay na tai useRouter hook use kora hoyase
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });
    if (error) {
      toast.error(error.message || 'Registration failed!');
    } else {
      toast.success('Registration successful!');
      router.push('/');
    }
  };

  return (
    <div className="container mx-auto bg-slate-100 min-h-[70vh] flex justify-center items-center mt-10">
      <div className="p-6 rounded-xl bg-white w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Register your account
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Type here Name"
              required
            />
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Enter your email"
              required
            />
          </fieldset>

          {/* Photo */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Password</legend>

            <div className="relative">
              <input
                type="password"
                name="password"
                className="input w-full pr-10"
                placeholder="Type here password"
                required
              />
            </div>
          </fieldset>

          {/* Button */}
          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>

        <div className="divider">OR</div>
        <button className="btn w-full font-semibold text-xl flex justify-center items-center gap-1 mx-auto">
          <Image src={GoogleImage} alt="Google Logo" className="w-[25px]" />{' '}
          Continue with Google
        </button>

        <p className="mt-4 text-center">
          Do you have an account?{' '}
          <Link href={'/login'} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
