import { cn } from "@/utils/utils";
import Link from "next/link";
import { ReactNode } from "react";

export default function GradientBackgroundButton({
  className,
  text,
  href,
  target,
}: {
  className?: string;
  text: string | ReactNode;
  href?: string;
  target?: string;
}) {
  if (!href) {
    return (
      <button className={cn("w-fit rounded-lg py-2.5 px-5", className)}>
        <p className="text-base text-white">{text}</p>
      </button>
    );
  }

  return (
    <Link className="" href={href} target={target}>
      <button
        className={cn(
          "w-fit rounded-lg py-2.5 px-5 text-base text-white",
          className
        )}
      >
        {text}
      </button>
    </Link>
  );
}
