'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/app/lib/auth-client';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast'; 
import GoogleImage from '../../assets/google-logo.png';

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: '/',
    });

    if (error) {
      toast.error(error.message || 'Login failed!');
    } else {
      toast.success('Login successful!');
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
    });
  };

  return (
    <div className="container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center p-4">
      <div className="p-8 rounded-xl bg-white shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          {/* Email field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold">Email</legend>
            <input
              type="email"
              className={`input w-full ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Type here email"
              {...register('email', { required: 'Email field is required' })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Password field */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend font-semibold">Password</legend>
            <div className="relative">
              <input
                type={isShowPassword ? 'text' : 'password'}
                className={`input w-full pr-10 ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Type here password"
                {...register('password', {
                  required: 'Password field is required',
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

          <button className="btn w-full bg-slate-800 text-white hover:bg-slate-700">
            Login
          </button>
        </form>

        <div className="divider text-gray-400">OR</div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full font-semibold flex justify-center items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50">
          <Image src={GoogleImage} alt="Google Logo" className="w-[20px]" />{' '}
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{' '}
          <Link
            href={'/register'}
            className="text-blue-500 font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
