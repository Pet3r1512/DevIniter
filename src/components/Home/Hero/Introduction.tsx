import GradientBackgroundButton from "@/components/Layouts/buttons/Button";
import {
  HeroHighlight,
  Highlight,
} from "@/components/ui/aceternity/hero-highlight";
import { useInViewStore } from "@/stores/useInViewStore";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
      <div className="lg:pb-24 flex flex-col items-center gap-y-8">
        <p className=""></p>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl md:text-5xl lg:text-7xl lg:w-[650px] text-center bg-gradient-to-b dark:from-white dark:via-gray-light dark:to-gray from-primary via-primary-light to-secondary inline-block text-transparent bg-clip-text font-extrabold !leading-relaxed mx-auto"
          >
            The Ultimate <br />
            <Highlight className="dark:text-white text-black-main">
              Starter Templates
            </Highlight>
            <br />
            for Developers
          </motion.h1>
        </HeroHighlight>
        <p className="text-lg lg:text-xl z-10 w-11/12 lg:w-[650px] text-center dark:text-gray-light text-gray-dark">
          DevIniter offers a collection of blazing fast starter templates to
          kickstart your development journey.
        </p>
        <div className="flex items-center gap-x-5">
          <GradientBackgroundButton
            text="Get Started"
            href="/docs/introduction"
            className="w-max relative z-10 bg-gradient-to-br from-primary/85 to-secondary/85 lg:hover:from-primary lg:hover:to-secondary"
          />
          <GradientBackgroundButton
            href="https://github.com/Pet3r1512/DevIniter"
            target="_blank"
            text={
              <div className="flex items-center gap-x-2.5 dark:text-white text-black">
                <svg
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="size-5 dark:text-white text-black"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>github [#142]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="currentColor"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#142]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                Github
              </div>
            }
            className="w-max relative z-10 shadow-2xl border-2 dark:border-white isolate ring-1 dark:bg-black/50 bg-white/75 ring-black/5"
          />
        </div>
      </div>
    </section>
  );
}
