import {
  HeroHighlight,
  Highlight,
} from "@/components/ui/aceternity/hero-highlight";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <HeroHighlight className="lg:h-80 lg:w-auto">
      <h1 className="text-4xl md:text-5xl lg:text-[84px] text-center bg-gradient-to-b dark:from-white dark:via-gray-light dark:to-gray from-primary via-primary-light to-secondary inline-block text-transparent bg-clip-text font-extrabold !leading-relaxed mx-auto">
        The Ultimate <br className="md:hidden" />
        <Highlight className="dark:text-white text-black-main">
          Starter Templates
        </Highlight>
        <br />
        for Developers
      </h1>
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
        className="hidden"
      >
        The Ultimate <br className="md:hidden" />
        <Highlight className="dark:text-white text-black-main">
          Starter Templates
        </Highlight>
        <br />
        for Developers
      </motion.h1>
    </HeroHighlight>
  );
}
