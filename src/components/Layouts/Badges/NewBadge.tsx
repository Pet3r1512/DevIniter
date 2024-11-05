import { cn } from "@/utils/utils";

export default function NewBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "w-fit !text-[8.5px] bg-[#008000] text-white rounded-lg px-1 pt-[0.9px] text-center",
        className
      )}
    >
      New
    </span>
  );
}
