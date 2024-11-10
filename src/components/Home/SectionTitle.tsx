import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string | ReactNode;
  subtitle: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
      }}
      className="flex flex-col gap-y-5 items-center relative z-10"
    >
      <div className="bg-gradient-to-br from-secondary via-primary dark:to-white to-secondary inline-block text-transparent bg-clip-text text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full md:max-w-[50vw] lg:max-w-[35vw]">
        {title}
      </div>
      <p className="dark:text-gray-light md:text-lg w-[85vw] text-center lg:text-xl">
        {subtitle}
      </p>
    </div>
  );
}
