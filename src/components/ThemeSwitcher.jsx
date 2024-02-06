"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <HiMiniSun
          className="w-6 h-6 text-amber-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <HiMiniMoon
          className="h-6 w-6 text-gray-900"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return <>{renderThemeChanger()}</>;
}
export default ThemeSwitcher;
