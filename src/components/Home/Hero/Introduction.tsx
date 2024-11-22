import { useInViewStore } from "@/stores/useInViewStore";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Instruction from "./Instructions";

const DynamicInstallCommandBlock = dynamic(() => import("./InstallBox"), {
  loading: () => (
    <div className="dark:bg-black bg-white h-10 w-52 md:h-11 md:w-60 lg:h-16 lg:w-80 rounded-lg md:rounded-xl lg:rounded-2xl" />
  ),
  ssr: false,
});

const DynamicTitle = dynamic(() => import("./Title"), {
  loading: () => (
    <div className="min-w-64 min-h-40 md:h-36 md:w-[600px] lg:h-80 lg:w-auto " />
  ),
  ssr: false,
});

export default function Introduction() {
  const { setHeroInView } = useInViewStore();
  const ref = useRef(null);
  const isHeroInView = useInView(ref, { once: true });

  useEffect(() => {
    setHeroInView(isHeroInView);
  }, [isHeroInView, setHeroInView]);

  return (
    <section
      ref={ref}
      className="w-screen flex justify-center items-center min-h-screen"
    >
      <div className="pb-24 lg:pb-0 flex flex-col items-center gap-y-8">
        <DynamicTitle />
        <p className="text-lg md:text-xl lg:text-2xl z-10 w-11/12 md:w-[500px] lg:w-[700px] text-center dark:text-gray-light text-gray-dark">
          DevIniter offers a collection of blazing fast starter templates to
          kickstart your development journey.
        </p>
        <Instruction />
        <DynamicInstallCommandBlock />
      </div>
    </section>
  );
}
