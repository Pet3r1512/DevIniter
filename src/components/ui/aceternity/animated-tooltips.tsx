"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { TechProps } from "@/components/Home/SupportTechs/_index";
import TechSquare from "@/components/Home/SupportTechs/TechSquare";

export const AnimatedTooltip = ({ items }: { items: TechProps[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div className="!flex !flex-wrap !justify-center !gap-5">
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px h-px" />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                {item.isBuilt === false ? (
                  <div className="text-white text-xs">Coming Soon</div>
                ) : (
                  <></>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <TechSquare onMouseMove={handleMouseMove} item={item} />
        </div>
      ))}
    </div>
  );
};
