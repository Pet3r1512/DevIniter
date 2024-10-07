import { Menu } from "lucide-react";
import Github from "./Github";
import Logo from "./Logo";
import Navigation from "./Navigations";
import SearchBar from "./SearchBar/_index";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-5 lg:px-0">
      <Logo />
      <Navigation />
      <div className="flex items-center gap-x-5 lg:hidden">
        <SearchBar />
        <Menu className="lg:hidden" size={20} />
      </div>
      <div className="lg:flex items-center gap-x-5 hidden">
        <SearchBar />
        <ThemeToggle />
        <VerticalLine />
        <Github size={20} />
      </div>
    </header>
  );
}

function VerticalLine() {
  return (
    <div className="border-l-2 border-black-main dark:border-white h-[25px]"></div>
  );
}
