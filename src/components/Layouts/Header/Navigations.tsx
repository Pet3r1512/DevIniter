import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";
import NewBadge from "../Badges/NewBadge";
import ComingSoon from "../Badges/ComingSoon";
import { ReactNode } from "react";

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
const badgeClassName =
  "relative ml-1.5 lg:ml-0 lg:top-[-12px] text-sm px-1.5 py-1";

export const BadgePattern: Record<string, ReactNode> = {
  new: <NewBadge className={badgeClassName} />,
  coming: <ComingSoon className={badgeClassName} />,
};

export default function Navigation() {
  const { handleHashScroll } = useSmoothScroll();

  return (
    <nav
      data-testid="navbar"
      className="hidden lg:flex items-center gap-x-8 mt-1"
    >
      {navs.map((nav, index) => {
        return (
          <Link
            onClick={(e) => handleHashScroll(e, nav.isHash ?? false)}
            key={index}
            href={nav.href}
            className="lg:hover:text-primary text-gray dark:text-white transition-all duration-150 ease-linear lg:text-lg relative"
          >
            {nav.name}
            {nav.status && BadgePattern[nav.status]}
          </Link>
        );
      })}
    </nav>
  );
}
