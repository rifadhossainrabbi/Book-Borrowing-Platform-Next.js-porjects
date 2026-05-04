'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { authClient } from '@/app/lib/auth-client';
import GoogleImage from '../../assets/google-logo.png';

const RegisterPage = () => {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { name, email, password, image } = data;

    const { error } = await authClient.signUp.email({
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

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
    });
  };

  return (
    <div className="container mx-auto min-h-[70vh] flex justify-center items-center mt-10 p-4">
      <div className="p-6 rounded-xl border border-amber-600 w-full max-w-md shadow-md">
        {/* header */}
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="bg-linear-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
            Register your account
          </span>
        </h2>

        <form onSubmit={handleSubmit(handleRegisterFunc)} className="space-y-4">
          {/* Name Field */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-semibold">Name</legend>
            <input
              type="text"
              className={`input w-full focus:outline-none focus:border-amber-600 ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Type here Name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </fieldset>

          {/* email section */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-semibold">Email</legend>
            <input
              type="email"
              className={`input w-full focus:outline-none focus:border-amber-600 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email field is required',
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Photo URL Field */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-semibold">Photo URL</legend>
            <input
              type="text"
              className="input w-full focus:outline-none focus:border-amber-600"
              placeholder="Enter photo URL"
              {...register('image')}
            />
          </fieldset>

          {/* Password Field */}
          <fieldset className="fieldset w-full relative">
            <legend className="fieldset-legend font-semibold">Password</legend>
            <div className="relative">
              <input
                type={isShowPassword ? 'text' : 'password'}
                className={`input w-full pr-10 focus:outline-none focus:border-amber-600 ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Type here password"
                {...register('password', {
                  required: 'Password field is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn  border border-amber-600 bg-linear-to-r from-amber-300 via-amber-800 to-amber-800 hover:bg-none text-white w-full h-10 rounded-md  text-lg font-bold mt-4 shadow-lg shadow-amber-600/20 flex items-center justify-center transition-all duration-300 active:scale-95">
            Register
          </button>
        </form>

        <div className="divider text-gray-400">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full font-semibold flex justify-center items-center gap-2 bg-black hover:bg-gray-50 hover:text-black">
          <Image src={GoogleImage} alt="Google Logo" className="w-[20px]" />{' '}
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm">
          Do you have an account?{' '}
          <Link
            href={'/login'}
            className="text-blue-500 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
