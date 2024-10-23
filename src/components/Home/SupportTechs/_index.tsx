import SectionTitle from "../SectionTitle";
import TechSquare from "./TechSquare";

export default function SupportedTechs() {
  const techStacks = [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      logoURL: "typescript.png",
      shadowColor: "lg:hover:shadow-[#3178C6]",
    },
    {
      name: "Nextjs",
      href: "https://nextjs.org/",
      logoURL: "nextjs.png",
      shadowColor: "lg:hover:shadow-black-main dark:lg:hover:shadow-white",
    },
    {
      name: "ReactJS",
      href: "https://react.dev/",
      logoURL: "reactjs.png",
      shadowColor: "lg:hover:shadow-[#00D8FF]",
    },
    {
      name: "Tanstack",
      href: "https://tanstack.com/",
      logoURL: "tanstack.png",
      shadowColor: "lg:hover:shadow-[#EAB308]",
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
      name: "Prettier",
      href: "https://prettier.io/",
      logoURL: "prettier.png",
      shadowColor: "lg:hover:shadow-[#c1121f]",
    },
    {
      name: "tRPC",
      href: "https://trpc.io/",
      logoURL: "trpc.png",
      shadowColor: "lg:hover:shadow-[#398CCB]",
    },
    {
      name: "Prisma",
      href: "https://www.prisma.io/",
      logoURL: "prisma.png",
      shadowColor: "lg:hover:shadow-[#5A67D8]",
    },
    {
      name: "Zustand",
      href: "https://github.com/pmndrs/zustand",
      logoURL: "zustand.png",
      shadowColor: "lg:hover:shadow-[#7f4f24]",
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
  ];

  return (
    <section className="flex flex-col gap-y-24 lg:gap-y-56 justify-center min-h-screen max-w-7xl mx-auto">
      <SectionTitle
        title="Wonderfull Supported Technologies and Tools"
        subtitle=""
      />
      <div className="flex flex-wrap w-9/12 lg:w-2/3 justify-center gap-5 mx-auto">
        {techStacks.map((tech, index) => {
          const { name, href, logoURL, shadowColor } = tech;
          return (
            <TechSquare
              key={index}
              name={name}
              href={href}
              logoURL={"/images/techstacks/" + logoURL}
              shadowColor={shadowColor}
            />
          );
        })}
      </div>
    </section>
  );
}
