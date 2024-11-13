import Github from "./Github";
import Logo from "./Logo";
import ThemeToggle from "../ThemeToggle";
import Sidebar from "./Sidebar/_index";
import { Navbar } from "./Navbar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-5 lg:px-0 sticky top-0 z-30 !backdrop-filter !backdrop-blur-xl">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">
        <Sidebar />
        <div className="flex items-center gap-x-8">
          <Logo />
          <Navbar />
        </div>
        <div className="size-6 invisible" />
        <div className="lg:flex items-center gap-x-5 hidden">
          <Link
            href="https://github.com/Pet3r1512/DevIniter/issues/new?labels=enhancement&template=feature-request---.md"
            target="_blank"
            className="text-lg flex"
          >
            Contributing
            <ArrowUpRight size={14} />
          </Link>
          <Link href="/release" className="text-lg flex">
            Release Notes
            <ArrowUpRight size={14} />
          </Link>
          <VerticalLine />
          <ThemeToggle />
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
