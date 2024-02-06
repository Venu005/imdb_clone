"use client";

import { useEffect } from "react";

// create react error boundaries

export default function Error({ error, reset }) {
  useEffect(
    function () {
      console.error(error);
    },
    [error]
  );

  return (
    <div className="text-center mt-[50%] sm:mt-[20%]">
      <h2 className="text-3xl mb-4 font-bold">Something went wrong</h2>
      <button onClick={() => reset()} className="hover:text-amber-600 bg-amber-500 text-zinc-900 font-semibold p-2 text-sm rounded-lg">Try again</button>
    </div>
  );
}
