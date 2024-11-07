import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type DemoCardProps = {
  image: string[]; // [0] is dark and [1] is light
  logo: string;
  templateName: string;
  techStacks: ReactNode; // with className="flex items-center gap-x-2.5 mt-5"
  liveDemoURL: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function DemoCard({ props }: { props: DemoCardProps }) {
  const {
    image,
    logo,
    templateName,
    techStacks,
    liveDemoURL,
    className,
    style,
  } = props;
  return (
    <div
      style={style}
      className="group w-[20rem] h-auto md:w-[38rem] md:h-[22rem] relative shadow-2xl rounded-2xl"
    >
      <div className="w-full h-full">
        <Image
          src={image[0]}
          alt="nextjs template"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto lg:group-hover:opacity-50 rounded-t-2xl hidden dark:block"
          quality={75}
        />
        <Image
          src={image[1]}
          alt="nextjs template"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto lg:group-hover:opacity-50 rounded-t-2xl dark:hidden"
          quality={75}
        />
      </div>
      <div className="lg:hidden mt-5 md:mt-16 text-center lg:text-left py-5">
        <p className="font-bold lg:text-xl">{templateName}</p>
        {techStacks}
        <Link
          href={liveDemoURL}
          target="_blank"
          className={cn(
            "bg-gradient-to-br from-secondary via-primary dark:to-white to-secondary inline-block text-transparent bg-clip-text lg:text-xl mt-5",
            className
          )}
        >
          Live Demo
        </Link>
      </div>
      <div className="hidden lg:block lg:h-0 lg:group-hover:h-1/2 transition-all duration-150 ease-linear h-1/2 w-full rounded-b-2xl lg:absolute bottom-0 dark:bg-black bg-white p-5">
        <div className="lg:group-hover:block lg:hidden transition-all duration-150 lg:group-hover:delay-1000 ease-linear">
          <div className="flex items-center gap-x-5">
            <Image
              src={logo}
              alt={templateName}
              width={0}
              height={0}
              sizes="100vw"
              className="size-8 lg:size-10"
            />
            <p className="font-bold lg:text-xl">{templateName}</p>
          </div>
          {techStacks}
          <Link
            href={liveDemoURL}
            target="_blank"
            className={cn(
              "bg-gradient-to-br from-secondary via-primary dark:to-white to-secondary inline-block text-transparent bg-clip-text lg:text-xl mt-5",
              className
            )}
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
