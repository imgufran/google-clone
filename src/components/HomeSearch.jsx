"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.trim()) {
      return;
    }

    router.push(`/search/web?search=${input}`);
  }

  async function randomSearch() {
    // Set the Loading state to true
    setRandomSearchLoading(true);

    const res = await fetch(`https://random-word-api.herokuapp.com/word
    `);

    const data = await res.json();
    const word = data[0];

    if (!word) {
      return;
    }

    router.push(`/search/web?search=${word}`);

    // Set the Loading state to false
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form
        className="flex w-full mt-5 max-w-[90%] mx-auto border border-200 px-5 py-3 rounded-full hover:shadow-md transition-all duration-200 focus-within:shadow-md sm:max-w-xl lg:max-w-2xl items-center"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input className="flex-grow focus:outline-none" type="text" />
        <BsFillMicFill text-xl />
      </form>

      {/* Buttons */}
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          className="btn flex items-center justify-center disabled:opacity-80"
          onClick={randomSearch}
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <img
              className="h-6 text-center"
              src="spinner.svg"
              alt="loading..."
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
