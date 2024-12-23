import { cn } from "@/utils/utils";

export default function ComingSoon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "w-fit !text-[8.5px] bg-[#e0ac00] dark:bg-[#e09b31] text-white rounded-lg px-1 pt-[0.9px] text-center",
        className
      )}
    >
      Coming
    </span>
  );
}
