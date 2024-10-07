import ThemeModeSwitcher from "../ThemeToggle";
import Logo from "./Logo";
import SearchBar from "./SearchBar/_index";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-2.5 lg:px-0">
      <Logo />
      <div className="flex items-center gap-x-5">
        <SearchBar />
        <ThemeModeSwitcher />
      </div>
    </header>
  );
}
