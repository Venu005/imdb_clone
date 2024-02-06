"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      {/* dynamic links  add smooth underline later*/}
      <Link
        href={`/?genre=${param}`}
        className={` dark:text-gray-400 text-stone-400 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg dark:text-slate-100 text-stone-700"
            : ""
        } transition-all duration-300`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavBarItem;
