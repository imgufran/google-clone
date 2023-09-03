import Image from "next/image";
import Link from "next/link";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        {/* Image Logo */}
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
            width="120"
            height="40"
            alt="Google Logo"
          />
        </Link>

        {/* Search Input */}
        <div className="flex-1">
          <SearchBox className="" />
        </div>

        {/* Right side menus */}
        <div className="hidden md:inline-flex space-x-2 items-center">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-95 hover:shadow-md transition-all duration-200 ml-2">
          Sign in
        </button>
      </div>
      {/* Search Options */}
      <SearchHeaderOptions />
    </header>
  );
}
