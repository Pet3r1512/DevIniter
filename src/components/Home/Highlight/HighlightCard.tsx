import { cn } from "@/utils/utils";
import React, { ReactNode } from "react";

export type HighlightCardProps = {
  title: string;
  desc: string;
  image: ReactNode;
  style: React.CSSProperties;
};

export default function HighlightCard({
  content,
  index,
}: {
  content: HighlightCardProps;
  index: number;
}) {
  const { title, desc, image, style } = content;
  return (
    <div
      style={style}
      key={index}
      className={cn(
        "isolate ring-1 dark:bg-black/50 bg-white/75 ring-black/5 lg:hover:scale-105 transition-all duration-100 ease-lineare rounded-[20px] p-2.5 md:p-3.5 lg:p-5 shadow-2xl md:h-96 md:w-96 lg:w-auto h-80 w-80 flex flex-col justify-center items-center gap-y-8",
        index === 1 || index === 2 ? "lg:col-span-2" : ""
      )}
    >
      {image}
      <div className="text-center">
        <p className="text-xl">{title}</p>
        <p className="dark:text-gray-light text-black-main">{desc}</p>
      </div>
    </div>
  );
}
