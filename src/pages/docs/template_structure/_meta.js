import Image from "next/image";

/* eslint-disable import/no-anonymous-default-export */
export default {
  nextjs: {
    title: (
      <p className="flex items-center gap-x-1">
        <Image
          src="/images/templates/Nextjs.png"
          width={24}
          height={24}
          alt="Nextjs - DevIniter"
        />{" "}
        <span className="mt-[0.75px]">Next.js</span>
      </p>
    ),
  },
  vite: {
    title: (
      <p className="flex items-center gap-x-1">
        <Image
          src="/images/templates/Vite.png"
          width={24}
          height={24}
          alt="Vite - DevIniter"
        />{" "}
        <span className="mt-[0.75px]">Vite</span>
      </p>
    ),
  },
  vitestack: {
    title: (
      <p className="flex items-center gap-x-1">
        <Image
          src="/images/templates/ViteStack.png"
          width={24}
          height={24}
          alt="ViteStack"
        />{" "}
        <span className="mt-[0.75px]">ViteStack</span>
      </p>
    ),
  },
};
