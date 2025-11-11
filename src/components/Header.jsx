import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function Header() {
  return (
    <header
      // className="absolute top-0 left-0 right-0
      //            h-12 sm:h-14 md:h-16 lg:h-20
      //            px-3 sm:px-4 md:px-6 lg:px-8
      //            flex items-center justify-between
      //            border-b border-gray-100 bg-white
      //            z-50
      //            pt-[env(safe-area-inset-top)]"
      //            style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
className="absolute top-0 left-0 right-0 h-12 sm:h-14 md:h-16 lg:h-20 px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between border-b border-gray-100 bg-white z-50"
  style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <h1 className="font-mono text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold tracking-wide">
        <img src="/logo.jpeg" alt="YourApp name" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain" loading="lazy" />
      </h1>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4">
        <button type="button" aria-label="Likes" className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-md">
          <AiOutlineHeart className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        <button type="button" aria-label="Messages" className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-md">
          <FaFacebookMessenger className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
      </div>
    </header>
  );
}
