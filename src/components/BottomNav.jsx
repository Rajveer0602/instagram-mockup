import React from 'react';
import { Home, Search, PlusSquare, Clapperboard, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav
      // className="absolute bottom-0 left-0 right-0
      //            h-12 sm:h-14 md:h-16 lg:h-20
      //            border-t border-gray-100 bg-white
      //            flex items-center justify-between
      //            px-3 sm:px-4 md:px-6 lg:px-8
      //            z-50
      //            pb-[env(safe-area-inset-bottom)]"
      className="absolute bottom-0 left-0 right-0 h-12 sm:h-14 md:h-16 lg:h-20 border-t border-gray-100 bg-white flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 z-50"
  style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-center justify-between w-full">
        <button type="button" aria-label="Home" className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-md">
          <Home className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={1.7} />
        </button>

        <button type="button" aria-label="Search" className="p-1 opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-md">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={1.7} />
        </button>

        <button type="button" aria-label="Create Post" className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-md">
          <PlusSquare className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" strokeWidth={1.7} />
        </button>

        <button type="button" aria-label="Reels" className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-md">
          <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={1.7} />
        </button>

        <button type="button" aria-label="Profile" className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-md">
          <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={1.7} />
        </button>
      </div>
    </nav>
  );
}
