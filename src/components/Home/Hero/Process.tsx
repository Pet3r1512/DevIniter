import { motion } from "framer-motion";
import Image from "next/image";

export default function Process() {
  return (
    <section className="flex items-center justify-center w-full lg:w-screen lg:mt-16">
      <div className="dark:bg-white bg-black-main w-screen absolute h-[0.5px] backdrop-blur-xl">
        <motion.div
          initial={{
            left: "50%",
          }}
          animate={{
            left: "95%",
          }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            delay: 4.5,
          }}
          className="size-3 bg-gradient-to-tr from-primary to-secondary rounded-full absolute left-[5%] top-[-4px] blur-[1.5px]"
        ></motion.div>
        <motion.p
          initial={{
            left: "50%",
          }}
          animate={{
            left: "95%",
          }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            delay: 4.5,
          }}
          className="absolute top-[-25px] -translate-x-1/2 w-max"
        >
          DevIniter Template
        </motion.p>
        <motion.div
          initial={{
            left: "2%",
          }}
          animate={{
            left: "50%",
          }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            delay: 0.5,
          }}
          className="size-3 bg-[#00b4d8] rounded-full absolute left-[5%] top-[-4px] blur-[1.5px]"
        ></motion.div>
        <motion.p
          initial={{
            left: "2%",
          }}
          animate={{
            left: "50%",
          }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            delay: 0.5,
          }}
          className="absolute top-[-25px] -translate-x-1/2"
        >
          React
        </motion.p>
        <div className="dark:bg-white bg-black-main w-1/2 absolute h-[0.5px] backdrop-blur-xl rotate-[5deg] top-[-75px]">
          <motion.div
            initial={{
              left: "5%",
            }}
            animate={{
              left: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              delay: 0.5,
            }}
            className="size-3 bg-red-500 rounded-full absolute left-[5%] top-[-4.5px] blur-[1.5px]"
          ></motion.div>
          <motion.p
            initial={{
              left: "5%",
            }}
            animate={{
              left: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              delay: 0.5,
            }}
            className="absolute top-[-25px] -translate-x-1/2"
          >
            Prettier
          </motion.p>
        </div>
        <div className="dark:bg-white bg-black-main w-1/2 absolute h-[0.5px] backdrop-blur-xl rotate-[2.75deg] top-[-35px]">
          <motion.div
            initial={{
              left: "5%",
            }}
            animate={{
              left: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              delay: 0.5,
            }}
            className="size-3 bg-[#a6808c] rounded-full absolute left-[5%] top-[-4.5px] blur-[1.5px]"
          ></motion.div>
          <motion.p
            initial={{
              left: "5%",
            }}
            animate={{
              left: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              delay: 0.5,
            }}
            className="absolute top-[-25px] -translate-x-1/2"
          >
            ShadCN
          </motion.p>
        </div>
        <div className="dark:bg-white bg-black-main w-1/2 absolute h-[0.5px] backdrop-blur-xl -rotate-3 top-[40px]">
          <motion.div
            initial={{
              left: "5%",
            }}
            animate={{
              left: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              delay: 0.5,
            }}
            className="size-3 bg-[#7400b8] rounded-full absolute left-[5%] top-[-4.5px] blur-[1.5px]"
          ></motion.div>
          <motion.p
            initial={{
              left: "5%",
            }}
            animate={{
              left: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              delay: 0.5,
            }}
            className="absolute bottom-[-25px] -translate-x-1/2"
          >
            ESLint
          </motion.p>
        </div>
        <div className="dark:bg-white bg-black-main w-1/2 absolute h-[0.5px] -rotate-6 top-[80px]">
          <motion.div
            initial={{
              left: "5%",
            }}
            animate={{
              left: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              delay: 0.5,
            }}
            className="size-3 bg-[#ffd60a] rounded-full absolute left-[5%] top-[-4.5px] blur-[1.5px]"
          ></motion.div>
          <motion.p
            initial={{
              left: "5%",
            }}
            animate={{
              left: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              delay: 0.5,
            }}
            className="absolute bottom-[-25px] -translate-x-1/2 blur-none"
          >
            Tailwind
          </motion.p>
        </div>
      </div>
      <Image
        src={"/images/logos/Logo.png"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
        priority
        className="h-32 w-auto z-10 relative"
      />
    </section>
  );
}
