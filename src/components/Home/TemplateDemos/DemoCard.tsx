import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type DemoCardProps = {
  image: string[]; // [0] is dark and [1] is light
  templateName: string;
  techStacks: ReactNode; // with className="flex items-center gap-x-2.5 mt-5"
  liveDemoURL: string;
};

export default function DemoCard({ props }: { props: DemoCardProps }) {
  const { image, templateName, techStacks, liveDemoURL } = props;
  return (
    <div className="group max-w-[38rem] h-[22rem] relative shadow-2xl rounded-2xl">
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
      <div className="lg:h-0 lg:group-hover:h-2/5 transition-all duration-150 ease-linear h-1/3 w-full rounded-b-2xl absolute bottom-0 dark:bg-black bg-white p-3">
        <div className="lg:group-hover:block lg:hidden transition-all duration-200 ease-linear">
          <p className="font-bold lg:text-xl">{templateName}</p>
          {techStacks}
          <Link
            href={liveDemoURL}
            target="_blank"
            className="bg-gradient-to-br from-secondary via-primary dark:to-white to-secondary inline-block text-transparent bg-clip-text lg:text-xl mt-5"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
