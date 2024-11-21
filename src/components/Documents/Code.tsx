import { ReactNode } from "react";

export default function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-lg py-0.5 px-1 dark:bg-primary/30 bg-primary/50">
      {children}
    </code>
  );
}
