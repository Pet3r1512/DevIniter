"use client";
import { useInViewStore } from "@/stores/useInViewStore";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const DotLottiesReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false, //Disable server-side rendering
  }
);

export default function Process() {
  const { setAnimationInView } = useInViewStore();
  const ref = useRef(null);
  const isAnimationInView = useInView(ref);

  useEffect(() => {
    setAnimationInView(isAnimationInView);
  }, [isAnimationInView, setAnimationInView]);

  return (
    <div
      ref={ref}
      className="hidden lg:flex items-center justify-center min-h-screen lg:w-screen mt-32 bg-gray-dark dark:bg-black-main"
    >
      <DotLottiesReact
        className="lg:w-3/5 lg:max-w-6xl h-auto relative z-10"
        src="/animations/animation.lottie"
        loop
        autoplay
      />
    </div>
  );
}
