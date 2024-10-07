import ThemeModeSwitcher from "../ThemeToggle";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5">
      <Logo />
      <ThemeModeSwitcher />
    </header>
  );
}
