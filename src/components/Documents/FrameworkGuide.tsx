import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type FrameworkGuideProps = {
  logo: string;
  framework: string;
  url: string;
  desc: string;
};

export default function FrameworkGuide({
  props,
}: {
  props: FrameworkGuideProps;
}) {
  const { logo, framework, url, desc } = props;

  return (
    <Link
      href={`/docs/template_structure/${url}`}
      className="group flex w-full gap-x-2.5 p-5 rounded-xl dark:bg-black/50 bg-white/75 ring-black/5 lg:hover:scale-105 lg:dark:hover:bg-black lg:hover:bg-white transition-all duration-200 ease-linear shadow-2xl"
    >
      <Image
        src={logo}
        alt={framework}
        height={24}
        width={24}
        className="size-8"
      />
      <div className="flex flex-col gap-y-2.5 flex-1">
        <p className="text-lg font-bold flex items-center gap-x-1">
          {framework}
          <ChevronRight className="lg:group-hover:block size-6 lg:size-8 lg:hidden transition-all duration-200 ease-linear" />
        </p>
        <p>{desc}</p>
      </div>
    </Link>
  );
}
