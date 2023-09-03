"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search");
  const router = useRouter();

  const [term, setTerm] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!term.trim()) {
      return;
    }

    // Redirect the user
    router.push(`/search/web?search=${term}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-grow border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 items-center max-w-3xl h-12"
    >
      <input
        className="w-full focus:outline-none"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 hover:cursor-pointer mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch className="hidden sm:inline-flex text-2xl text-blue-500 hover:cursor-pointer" onClick={handleSubmit} />
    </form>
  );
}
