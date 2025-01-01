"use client";

import { FcBookmark } from "react-icons/fc";

import Link from "next/link";
import { usePoints } from "@/context/PointsContext";

const Header = () => {
  const { points } = usePoints();

  return (
    <header className="flex items-center justify-between px-6 py-4 text-white bg-gray-900 shadow-md">
      {/* Logo / Home Link */}
      <Link
        href="/"
        className="text-3xl font-bold text-white transition-colors duration-300 hover:text-blue-400"
      >
        English Quiz App
      </Link>

      {/* Points Display */}
      <div className="flex text-lg font-medium">
        <span>
          <FcBookmark className="mr-2 text-3xl text-yellow-500" />
        </span>
        <span className="mr-2 text-gray-300">Correct:</span>
        <span className="font-semibold text-blue-300">{points}</span>
      </div>
    </header>
  );
};

export default Header;
