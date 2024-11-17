import { useInViewStore } from "@/stores/useInViewStore";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Instruction from "./Instructions";

const DynamicInstallCommandBlock = dynamic(() => import("./InstallBox"), {
  loading: () => (
    <div className="dark:bg-black bg-white w-[217.58px] h-[38.5px] md:w-[255.91px] md:h-[52.5px] lg:w-[329.08px] lg:h-[77px]" />
  ),
  ssr: false,
});

const DynamicTitle = dynamic(() => import("./Title"), {
  loading: () => (
    <div className="w-[256.484px] h-[153.562px] md:w-[591.234px] md:h-[136.5px] lg:w-[1175.45px] lg:h-[273px]" />
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
      className="w-screen flex justify-center items-center min-h-[calc(100vh-22.5rem)] lg:min-h-[85dvh]"
    >
      <div className="lg:pb-24 flex flex-col items-center gap-y-8 h-[calc(100vh-22.5rem)] lg:h-[85dvh]">
        <p className=""></p>
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
