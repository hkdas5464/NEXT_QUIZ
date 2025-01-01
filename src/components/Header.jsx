"use client";

import { FcBookmark } from "react-icons/fc";

import Link from "next/link";
import { usePoints } from "@/context/PointsContext";

const Header = () => {
  const { points } = usePoints();

  return (
    // <header className="flex items-center justify-between px-6 py-4 text-white bg-gray-900 shadow-md">
    //   <Link
    //     href="/"
    //     className="text-3xl font-bold text-white transition-colors duration-300 hover:text-blue-400"
    //   >
    //     English Quiz App
    //   </Link>

    //   <div className="flex text-lg font-medium">
    //     <span>
    //       <FcBookmark className="mr-2 text-3xl text-yellow-500" />
    //     </span>
    //     <span className="mr-2 text-gray-300">Correct:</span>
    //     <span className="font-semibold text-blue-300">{points}</span>
    //   </div>
    // </header>


    <header className="sticky top-0 z-10 bg-white opacity-75">
      <nav aria-label="Global" className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex lg:flex-1">
          <div className="flex text-lg font-medium">
          <span>
          <FcBookmark className="mr-2 text-3xl text-yellow-500" />
         </span>
            <span className="mr-2 text-black-300">Correct:</span>
            <span className="font-semibold text-blue-700">{points}</span>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
      </nav>

    </header>
  );
};

export default Header;
