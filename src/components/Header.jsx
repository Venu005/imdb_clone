import Link from "next/link";
import MenuItem from "./MenuItem";
import { HiMiniHome, HiMiniInformationCircle } from "react-icons/hi2";
import ThemeSwitcher from "./ThemeSwitcher";
function Header() {
  return (
    <div className="flex justify-between items-center p-3 mx-auto max-w-6xl">
      <div className="flex gap-4 items-center pt-2">
        <MenuItem title="home" address="/" icon={<HiMiniHome />} />
        <MenuItem
          title="about"
          address="/about"
          icon={<HiMiniInformationCircle />}
        />
      </div>
      <div className="flex gap-1 items-center">
        <ThemeSwitcher />
        <Link href={"/home"} className="flex gap-1 items-center">
          <span className="font-bold text-2xl ml-2 bg-amber-500 rounded-lg px-2 py-1 text-black dark:text-white">
            IMDb
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
