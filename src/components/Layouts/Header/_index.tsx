import Github from "./Github";
import Logo from "./Logo";
import Navigation from "./Navigations";
import SearchBar from "./SearchBar/_index";
import ThemeToggle from "../ThemeToggle";
import Sidebar from "./Sidebar/_index";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-5 lg:px-0 sticky top-0 z-20 !backdrop-filter !backdrop-blur-xl">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">
        <Sidebar />
        <div className="flex items-center gap-x-8">
          <Logo />
          <Navigation />
        </div>
        <div className="flex items-center gap-x-5 lg:hidden w-1/3 justify-end">
          <SearchBar />
        </div>
        <div className="lg:flex items-center gap-x-5 hidden">
          <SearchBar />
          <ThemeToggle />
          <VerticalLine />
          <Github size={20} />
        </div>
      </div>
    </header>
  );
}

function VerticalLine() {
  return (
    <div
      data-testid="vt"
      className="border-l-2 border-black-main dark:border-white h-[25px]"
    ></div>
  );
}
