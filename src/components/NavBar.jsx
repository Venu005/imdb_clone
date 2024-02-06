import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <div className="flex dark:bg-slate-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6 mb-8 sm:mb-10">
    {/* useParam similarity --my pov */}
      <NavBarItem title="Trending" param="fetchTrending"/>
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default NavBar;
