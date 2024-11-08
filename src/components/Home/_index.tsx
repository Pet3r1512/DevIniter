"use client";

import { useInViewStore } from "@/stores/useInViewStore";
import Introduction from "./Hero/Introduction";
import dynamic from "next/dynamic";

const DynamicAnimation = dynamic(() => import("../Home/Hero/Process"), {
  loading: () => <></>,
  ssr: false,
});

export function Hero() {
  const { isHeroInView } = useInViewStore();
  return (
    <section className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 min-h-screen">
      <Introduction />
      {isHeroInView && <DynamicAnimation />}
    </section>
  );
}
