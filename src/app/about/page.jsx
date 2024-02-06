//chnage fonts later
import Link from "next/link";
import { PROJECT_GITHUB_LINK } from "../../../public/url";
import { GITHUB_URL } from "../../../public/url";
function About() {
  return (
    <>
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="bg-amber-300 dark:bg-amber-500 mt-3 pt-2 pb-2  sm:rounded-none ">
          <h1 className="text-2xl font-bold text-left sm:text-3xl dark:text-white dark:font-semibold p-2">
            {" "}
            About this project
          </h1>
        </div>
        <div className="pt-5">
          {/* /** will add image later */}
          <div className="px-5 mt-5">
            <p className="text-lg text-left sm:text-xl">
              This is a simple project to demonstrate the usage of Next.js,
              Tailwind CSS, and next-themes. The project is a simple IMDb clone
              with a dark mode themeAbout this project This is a simple project
              to demonstrate the usage of Next.js, Tailwind CSS, and
              next-themes. The project is a simple IMDb clone with a dark mode
              theme switcher. The project is open-source and available on
              GitHub. The project was created by switcher. The project is
              open-source and available on
              {
                <Link
                  href={PROJECT_GITHUB_LINK}
                  className="hover:text-amber-600"
                >
                  {" "}
                  GitHub (click here)
                </Link>
              }{" "}
            </p>

            <p className="text-lg dark:text-gray-100 pt-2 sm:text-xl">
              The project was created by{" "}
              <Link href={GITHUB_URL} className="hover:text-amber-500">
                Venusai
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
