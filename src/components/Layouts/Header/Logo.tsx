import { cn } from "@/utils/utils";
import Image from "next/image";

export default function Logo({
  src,
  className,
}: {
  src?: string;
  className?: string;
}) {
  return (
    <Image
      src={src || "/images/logos/FullLogo.png"}
      alt="Logo"
      width={0}
      height={0}
      sizes="100vw"
      quality={85}
      data-testid="Logo"
      className={cn("lg:h-12 w-auto h-10 max-w-1/3 lg:max-w-none", className)}
    />
  );
}
