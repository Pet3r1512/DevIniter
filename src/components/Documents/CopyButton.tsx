import { cn } from "@/utils/utils";
import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";

export default function CopyButton({
  copyContent,
  className,
  isBash = true,
  iconSize = 24,
}: {
  copyContent: string;
  className?: string;
  isBash?: boolean;
  iconSize?: number;
}) {
  const [done, setDone] = useState(false);

  return (
    <button
      onClick={() => {
        setDone(false);
        navigator.clipboard.writeText(copyContent);
        setDone(true);
        setTimeout(() => setDone(false), 2000); // Reset after 2 seconds
      }}
      className={cn(
        "!flex items-center justify-center gap-x-2.5 ml-auto transition-transform transform active:scale-95 hover:scale-105",
        className
      )}
    >
      {!isBash && <p className="text-sm font-medium text-gray-500">bash</p>}
      {!done ? (
        <Clipboard
          size={iconSize}
          className="text-gray-700 dark:text-gray-300 transition-colors hover:text-green-500- dark:hover:text-green-400"
        />
      ) : (
        <ClipboardCheck
          size={iconSize}
          className="text-green-600 dark:text-green-500 animate-pulse"
        />
      )}
    </button>
  );
}
