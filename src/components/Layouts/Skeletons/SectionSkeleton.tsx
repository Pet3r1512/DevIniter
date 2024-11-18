import { cn } from "@/utils/utils";

export default function SectionSkeleton({ className }: { className?: string }) {
  return <section className={cn("h-screen w-screen", className)} />;
}
