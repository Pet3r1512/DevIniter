"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/utils";
import ComingSoon from "../Badges/ComingSoon";
import NewBadge from "../Badges/NewBadge";
import Logo from "./Logo";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useInViewStore } from "@/stores/useInViewStore";

const badgeClassName =
  "relative ml-1.5 lg:ml-0 lg:top-[-12px] text-sm px-1.5 py-1";

export const BadgePattern: Record<string, React.ReactNode> = {
  new: <NewBadge className={badgeClassName} />,
  coming: <ComingSoon className={badgeClassName} />,
};

export const navs = [
  {
    name: "Documents",
    href: "/docs/introduction",
  },
  {
    name: "Contribution",
    href: "https://github.com/Pet3r1512/DevIniter/issues/new?labels=enhancement&template=feature-request---.md",
  },
  {
    name: "Live Demo",
    href: "#demo",
    isHash: true,
    status: "new",
  },
  {
    name: "Release Notes",
    href: "#",
    isHash: true,
    status: "coming",
  },
];

const templates: { title: string; href: string; description: string }[] = [
  {
    title: "Next.js",
    href: "/docs/template_structure/nextjs",
    description: "A Fullstack React.js Framework",
  },
  {
    title: "Vite",
    href: "/docs/template_structure/vite",
    description: "Fast and Modern React.js Build Tool",
  },
];

const explores: {
  title: string;
  href: string;
  isHash?: boolean;
  description: string;
}[] = [
  {
    title: "Live Demo",
    href: "#demo",
    isHash: true,
    description:
      "Visit DevIniter templates in action with our interactive demo",
  },
  {
    title: "Tech Stacks",
    href: "#techstacks",
    isHash: true,
    description: "Explore the powerful technologies behind our templates",
  },
];

const triggerClassName = "!bg-transparent dark:text-white lg:text-lg";
const itemClassName =
  "isolate ring-1 dark:bg-black/50 bg-white/75 ring-black/5 lg:hover:scale-105 lg:dark:hover:bg-black lg:hover:bg-white transition-all duration-200 ease-linear";

export function Navbar() {
  const { handleHashScroll } = useSmoothScroll();
  const { isAnimationInView } = useInViewStore();

  return (
    <NavigationMenu data-testid="navbar" className="mt-1 hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              triggerClassName,
              isAnimationInView ? "text-white" : "text-black"
            )}
          >
            Getting Started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] dark:bg-black bg-white border-none !outline-none">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium flex-1">
                      DevIniter
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Blazing Starter Templates for Developers
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs/introduction" title="Introduction">
                {
                  "Learn about DevIniter's core concepts, features and the technology stack we use."
                }
              </ListItem>
              <ListItem href="/docs/get_started" title="Overview">
                Step-by-step guide to set up your project and understand the
                project structure.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                Choose your favorite template and download it now.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              triggerClassName,
              isAnimationInView ? "text-white" : "text-black"
            )}
          >
            Template Structures
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {templates.map((template) => (
                <ListItem
                  key={template.title}
                  title={template.title}
                  href={template.href}
                >
                  {template.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              triggerClassName,
              isAnimationInView ? "text-white" : "text-black"
            )}
          >
            Explore More
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {explores.map((explore) => (
                <ListItem
                  onClick={(e) => handleHashScroll(e, explore.isHash ?? false)}
                  key={explore.title}
                  title={explore.title}
                  href={explore.href}
                >
                  {explore.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none !border-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
            itemClassName
          )}
          {...props}
        >
          <div className="text-base font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
