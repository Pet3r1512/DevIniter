import { cn } from "@/utils/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={"/images/logos/FullLogo.png"}
      alt="Logo"
      width={0}
      height={0}
      sizes="100vw"
      quality={85}
      priority
      data-testid="Logo"
      className={cn("lg:h-12 w-auto h-10 max-w-1/3 lg:max-w-none", className)}
    />
  );
}
