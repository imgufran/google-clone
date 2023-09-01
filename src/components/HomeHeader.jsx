import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header>
      <div className="flex justify-end p-5 text-sm space-x-4 items-center">
        <Link className="hover:underline" href="https://mail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline" href="https://images.google.com">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 hover:shadow-md transition-all duration-200">
          Sign in
        </button>
      </div>
    </header>
  );
}
