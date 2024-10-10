import Link from "next/link";

export const navs = [
  {
    name: "Documents",
    href: "/docs/introduction",
  },
  {
    name: "Contribution",
    href: "/contribution",
  },
];

export default function Navigation() {
  return (
    <nav data-testid="navbar" className="hidden lg:flex items-center gap-x-5">
      {navs.map((nav, index) => {
        return (
          <Link
            key={index}
            href={nav.href}
            className="lg:hover:text-primary transition-all duration-150 ease-linear lg:text-lg"
          >
            {nav.name}
          </Link>
        );
      })}
    </nav>
  );
}
