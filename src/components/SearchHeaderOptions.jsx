"use client";

import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("search");

  function selectTab(tab) {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}/?search=${searchTerm}`
    );
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      {/* Web Option */}
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 hover:cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        {/* Icon */}
        <AiOutlineSearch className="text-lg" />
        {/* Text */}
        <p>All</p>
      </div>

      {/* Image Option */}
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 hover:cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        {/* Icon */}
        <AiOutlineCamera className="text-lg" />
        {/* Text */}
        <p>Images</p>
      </div>
    </div>
  );
}
