import Link from 'next/link';
import GoogleImage from '../../assets/google-logo.png';
import Image from 'next/image';

const LogInPage = () => {
  return (
    <div className="container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login your account
        </h2>

        {/* handleSubmit ta onSubmit er moddhe boshbe r tar moddhe abar handleLoginFunc boshate hobe */}
        <form className="space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            {/* React hook from use koray name="email" ei tuku baad jabe */}
            <input
              type="email" //Email er akar na hole warning dibe
              className="input"
              placeholder="Type here email"
            />
            {/* email er required fill na korel ei message dekhabe */}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type here password"
            />
            {/* password er required fill na korel ei message dekhabe */}
            {/* Eye icon a click korle password er type toggle hobe */}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <div className="divider">OR</div>
        <button className="btn w-full font-semibold text-xl flex justify-center items-center gap-1 mx-auto">
          <Image src={GoogleImage} alt="Google Logo" className="w-[25px]" />{' '}
          Continue with Google
        </button>
        <p className="mt-4">
          Don't have an account?{' '}
          <Link href={'/register'} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
