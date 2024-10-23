import Introduction from "./Hero/Introduction";
import dynamic from "next/dynamic";

const DynamicAnimation = dynamic(() => import("../Home/Hero/Process"), {
  loading: () => <></>,
});

export function Hero() {
  return (
    <section className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 min-h-screen">
      <Introduction />
      <DynamicAnimation />
    </section>
  );
}
