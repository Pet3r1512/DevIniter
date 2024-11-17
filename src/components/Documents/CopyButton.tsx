import { cn } from "@/utils/utils";
import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";

export default function CopyButton({
  copyContent,
  className,
  isBash = true,
}: {
  copyContent: string;
  className?: string;
  isBash?: boolean;
}) {
  const [done, setDone] = useState(false);

  return (
    <button
      onClick={() => {
        setDone(false);
        navigator.clipboard.writeText(copyContent);
        setDone(true);
      }}
      className={cn(
        "!flex items-center justify-center gap-x-2.5 ml-auto",
        className
      )}
    >
      {!isBash && <p>bash</p>}
      {!done ? <Clipboard /> : <ClipboardCheck className="text-secondary/50" />}
    </button>
  );
}
