import Link from "next/link";

export default function Navigation() {
  const navs = [
    {
      name: "Documents",
      href: "/document",
    },
    {
      name: "Contribution",
      href: "/contribution",
    },
  ];
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
