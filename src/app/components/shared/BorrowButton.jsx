'use client';

import { authClient } from '@/app/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const BorrowButton = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const handleBororwButton = () => {
    if (session) {
      toast.success('Successfuly Borrow this Book!');
    } else {
      router.push('/login');
    }
  };
  return (
    <div>
      <div className="w-full sm:w-auto">
        <button
          onClick={handleBororwButton}
          className="w-full sm:w-auto px-10 h-14 rounded-xl bg-transparent border border-amber-600 hover:bg-linear-to-r from-amber-300 via-amber-800 to-amber-800 text-amber-600 font-bold text-lg transition-all duration-300  active:scale-95 shadow-lg shadow-amber-600/20">
          Borrow This Book
        </button>
      </div>
    </div>
  );
};

export default BorrowButton;
