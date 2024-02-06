import Link from "next/link";

function MenuItem({ title, address, icon }) {
  return (
    <Link href={address} className="hover:text-amber-500 ">
      <span className="text-3xl sm:hidden">{icon}</span>
      <p className="uppercase hidden  sm:inline text-sm font-semibold dark:text-gray-100 sm:text-xl">
        {title}
      </p>
    </Link>
  );
}

export default MenuItem;
