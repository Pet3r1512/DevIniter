import Link from "next/link";

export default function PatchNews() {
  return (
    <div
      data-testid
      className="bg-gradient-to-r text-white from-primary via-primary-light to-secondary h-8 py-1.5 lg:h-12 w-full flex flex-row text-center gap-x-1 items-center justify-center text-sm md:text-base font-semibold leading-normal"
    >
      <p className="hidden md:block">
        🚀 <strong>DevIniter</strong> <span className="text-gold">v1.2.17</span>{" "}
        has been released with Next15
      </p>
      <p className="md:hidden">
        🚀 <strong>DevIniter</strong> <span className="text-gold">v1.2.17</span>{" "}
        is out now.
      </p>
      <Link
        className="underline decoration-solid text-gold"
        href="/docs/installation"
      >
        Try It Now!
      </Link>
    </div>
  );
}
