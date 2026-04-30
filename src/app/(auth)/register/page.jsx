import Image from 'next/image';
import Link from 'next/link';
// import { FaGoogle } from 'react-icons/fa';
import GoogleImage from '../../assets/google-logo.png'

const RegisterPage = () => {
  return (
    <div className="container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
      <div className="p-6 rounded-xl bg-white w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Register your account
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Type here Name"
            />
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter your email"
            />
          </fieldset>

          {/* Photo */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
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
                className="input w-full pr-10"
                placeholder="Type here password"
              />
            </div>
          </fieldset>

          {/* Confirm Password (simple, no validation) */}
          {/* <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Confirm Password</legend>
            <input
              type="password"
              className="input w-full"
              placeholder="Re-type password"
            />
          </fieldset> */}

          {/* Button */}
          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>

        <div className="divider">OR</div>
        <button className="btn w-full font-semibold text-xl flex justify-center items-center gap-1 mx-auto">
          <Image src={GoogleImage} alt='Google Logo' className='w-[25px]' /> Continue with Google
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
