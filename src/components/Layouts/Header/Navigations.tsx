import Link from "next/link";

export const navs = [
  {
    name: "Documents",
    href: "/docs/introduction",
  },
  {
    name: "Contribution",
    href: "https://github.com/Pet3r1512/DevIniter/issues/new?labels=enhancement&template=feature-request---.md",
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
            className="lg:hover:text-primary text-gray dark:text-white transition-all duration-150 ease-linear lg:text-lg"
          >
            {nav.name}
          </Link>
        );
      })}
    </nav>
  );
}
