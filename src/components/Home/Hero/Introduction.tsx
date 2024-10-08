import {
  HeroHighlight,
  Highlight,
} from "@/components/ui/aceternity/hero-highlight";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section className="w-screen flex justify-center">
      <div className="lg:pt-20 lg:pb-24 flex flex-col items-center gap-y-8">
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
            className="text-5xl lg:text-7xl lg:w-[650px] text-center bg-gradient-to-b dark:from-white dark:via-gray-light dark:to-gray from-primary via-primary-light to-secondary inline-block text-transparent bg-clip-text font-extrabold leading-relaxed lg:leading-snug mx-auto"
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
          Deviniter offers a collection of blazing fast starter templates to
          kickstart your development journey.
        </p>
      </div>
    </section>
  );
}
