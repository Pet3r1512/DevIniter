import { ReactNode } from "react";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string | ReactNode;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col gap-y-5 items-center relative z-10">
      <p className="bg-gradient-to-br from-secondary via-primary dark:to-white to-secondary inline-block text-transparent bg-clip-text text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        {title}
      </p>
      <p className="dark:text-gray-light md:text-lg w-[85vw] text-center lg:text-xl">
        {subtitle}
      </p>
    </div>
  );
}
