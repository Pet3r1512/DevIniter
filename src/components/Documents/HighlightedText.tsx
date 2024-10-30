import { cn } from "@/utils/utils";
import Link from "next/link";

type HighlightedTextProps = {
  href: string;
  text: string;
  className?: string;
  target: "" | "_blank";
};

export default function HighlightedText({
  content,
}: {
  content: HighlightedTextProps;
}) {
  const { href, text, target, className } = content;

  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "text-primary font-semibold underline decoration-solid",
        className
      )}
    >
      {text}
    </Link>
  );
}
