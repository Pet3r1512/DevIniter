import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ArrowUpRight, ChevronsRight, Menu } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import ThemeToggle from "../../ThemeToggle";
import Github from "../Github";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const navlinks = [
  {
    name: "Getting Started",
    index: "item-1",
    sublinks: [
      {
        name: "Introduction",
        href: "/docs/introduction",
      },
      {
        name: "Overview",
        href: "/docs/get_started",
      },
      {
        name: "Installation",
        href: "/docs/installation",
      },
    ],
  },
  {
    name: "Template Structure",
    index: "item-2",
    sublinks: [
      {
        name: (
          <div className="flex items-center gap-x-2.5">
            <Image
              src="/images/templates/nextjs-deviniter.png"
              width={32}
              height={32}
              alt="nextjs-deviniter"
              className="size-5"
            />
            <p>Next.js</p>
          </div>
        ),
        href: "/docs/template_structure/nextjs",
      },
      {
        name: (
          <div className="flex items-center gap-x-2.5">
            <Image
              src="/images/templates/vite-deviniter.png"
              width={32}
              height={32}
              alt="vite-deviniter"
              className="size-5"
            />
            <p>Vite</p>
          </div>
        ),
        href: "/docs/template_structure/vite",
      },
    ],
  },
  {
    name: "Explore More",
    index: "item-3",
    sublinks: [
      {
        name: "Templates Features",
        href: "/features",
      },
    ],
  },
];

export default function Sidebar() {
  const handleNavClick = () => {
    document.getElementById("sidebar-trigger")?.click();
  };

  return (
    <Drawer direction="left">
    <Drawer direction="right">
      <DrawerTrigger id="sidebar-trigger" className="lg:hidden">
        <Menu size={24} />
      </DrawerTrigger>
      <DrawerContent className="lg:hidden h-[100dvh] flex flex-col p-8 gap-y-10">
        <p className="flex items-center text-sx dark:text-gray-400 text-gray">
          Drag to close <ChevronsRight />
        </p>
        <Logo className="h-auto w-32 md:w-56" />
        <aside className="flex flex-col gap-y-2.5 px-2 md:px-5 flex-1">
          <Accordion type="single" collapsible className="w-full">
            {navlinks.map((nav, index) => {
              return (
                <AccordionItem key={index} value={nav.index}>
                  <AccordionTrigger className="font-bold text-lg">
                    {nav.name}
                  </AccordionTrigger>
                  {nav.sublinks.map((sub, index) => {
                    return (
                      <AccordionContent className="ml-5 text-base" key={index}>
                        <Link onClick={() => handleNavClick()} href={sub.href}>
                          {sub.name}
                        </Link>
                      </AccordionContent>
                    );
                  })}
                </AccordionItem>
              );
            })}
          </Accordion>
          <Link
            className="py-4"
            onClick={() => handleNavClick()}
            target="_blank"
            href={
              "https://github.com/Pet3r1512/DevIniter/issues/new?labels=enhancement&template=feature-request---.md"
            }
          >
            <p className="font-bold text-lg">Contributing</p>
          </Link>
          <Link
            className="py-4"
            onClick={() => handleNavClick()}
            target="_blank"
            href={"/release"}
          >
            <p className="font-bold text-lg flex">
              Release Notes <ArrowUpRight className="mt-0.5" size={12} />
            </p>
          </Link>
        </aside>
        <div className="flex items-center gap-x-5">
          <ThemeToggle />
          <Github size={24} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
