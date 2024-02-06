'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className='flex justify-between px-5 max-w-6xl mx-auto'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 border-2 hover:placeholder-amber-50 hover:border-amber-500 mr-4'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className=' disabled:text-gray-400 dark:text-slate-100 bg-amber-500 py-1 px-3 rounded-lg'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}