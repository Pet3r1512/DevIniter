import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { BadgePattern, navs } from "../Navigations";
import Link from "next/link";
import Logo from "../Logo";
import ThemeToggle from "../../ThemeToggle";
import Github from "../Github";

export default function Sidebar() {
  const handleNavClick = () => {
    document.getElementById("sidebar-trigger")?.click();
  };

  return (
    <Drawer direction="left">
      <DrawerTrigger id="sidebar-trigger" className="lg:hidden w-1/3">
        <Menu size={24} />
      </DrawerTrigger>
      <DrawerContent className="lg:hidden h-[100dvh] w-2/3 flex flex-col p-5 gap-y-10">
        <Logo className="h-auto w-2/3" />
        <aside className="flex flex-col gap-y-2.5 px-5">
          {navs.map((nav, index) => {
            return (
              <Link
                key={index}
                onClick={() => handleNavClick()}
                href={nav.href}
                className="font-semibold"
              >
                {nav.name}
                {nav.status && BadgePattern[nav.status]}
              </Link>
            );
          })}
        </aside>
        <ThemeToggle className="w-fit h-auto mt-24" />
        <Github size={24} className="w-fit" />
      </DrawerContent>
    </Drawer>
  );
}
