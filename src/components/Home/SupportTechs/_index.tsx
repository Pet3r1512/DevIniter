import { AnimatedTooltip } from "@/components/ui/aceternity/animated-tooltips";
import SectionTitle from "../SectionTitle";

export type TechProps = {
  name: string;
  href: string;
  logoURL: string;
  shadowColor: string;
  isBuilt?: boolean | true;
};

export default function SupportedTechs() {
  const techStacks: TechProps[] = [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      logoURL: "typescript.png",
      shadowColor: "lg:hover:shadow-[#3178C6]",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      logoURL: "nextjs.png",
      shadowColor: "lg:hover:shadow-black-main dark:lg:hover:shadow-white",
    },
    {
      name: "React.js",
      href: "https://react.dev/",
      logoURL: "reactjs.png",
      shadowColor: "lg:hover:shadow-[#00D8FF]",
    },
    {
      name: "Vite",
      href: "https://vite.dev/",
      logoURL: "vite.png",
      shadowColor: "lg:hover:shadow-[#c77dff]",
    },
    {
      name: "Tailwind",
      href: "https://tailwindcss.com/",
      logoURL: "tailwind.png",
      shadowColor: "lg:hover:shadow-[#0EA5E9]",
    },
    {
      name: "Vitest",
      href: "https://vitest.dev/",
      logoURL: "vitest.png",
      shadowColor: "lg:hover:shadow-[#bfd200]",
    },
    {
      name: "PostCSS",
      href: "https://postcss.org/",
      logoURL: "postcss.png",
      shadowColor: "lg:hover:shadow-[#e63946]",
    },
    {
      name: "ESLint",
      href: "https://eslint.org/",
      logoURL: "eslint.png",
      shadowColor: "lg:hover:shadow-[#4B32C3]",
    },
    {
      name: "Prettier",
      href: "https://prettier.io/",
      logoURL: "prettier.png",
      shadowColor: "lg:hover:shadow-[#c1121f]",
      isBuilt: false,
    },
    {
      name: "tRPC",
      href: "https://trpc.io/",
      logoURL: "trpc.png",
      shadowColor: "lg:hover:shadow-[#398CCB]",
      isBuilt: false,
    },
    {
      name: "Tanstack",
      href: "https://tanstack.com/",
      logoURL: "tanstack.png",
      shadowColor: "lg:hover:shadow-[#EAB308]",
      isBuilt: false,
    },
    {
      name: "Prisma",
      href: "https://www.prisma.io/",
      logoURL: "prisma.png",
      shadowColor: "lg:hover:shadow-[#5A67D8]",
      isBuilt: false,
    },
    {
      name: "Zustand",
      href: "https://github.com/pmndrs/zustand",
      logoURL: "zustand.png",
      shadowColor: "lg:hover:shadow-[#7f4f24]",
      isBuilt: false,
    },
  ];

  return (
    <section className="flex flex-col gap-y-24 lg:gap-y-56 justify-center min-h-screen max-w-7xl mx-auto">
      <SectionTitle
        title="Wonderfull Supported Technologies and Tools"
        subtitle=""
      />
      <div className="w-9/12 lg:w-2/3 mx-auto">
        <AnimatedTooltip items={techStacks}></AnimatedTooltip>
      </div>
    </section>
  );
}
