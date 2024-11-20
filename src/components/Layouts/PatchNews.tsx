import Link from "next/link";

export default function PatchNews() {
  return (
    <div
      data-testid
      className="bg-gradient-to-r text-white from-primary via-primary-light to-secondary h-24 py-1.5 lg:h-12 w-full flex flex-col lg:flex-row text-center gap-x-1 items-center justify-center font-semibold leading-normal"
    >
      <p>
        🚀 <strong>DevIniter</strong> <span className="text-gold">v1.2.14</span>{" "}
        now lets users choose whether to install Prisma when selecting the
        Next.js template.
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
