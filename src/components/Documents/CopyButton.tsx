import { cn } from "@/utils/utils";
import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";

export default function CopyButton({
  copyContent,
  className,
}: {
  copyContent: string;
  className?: string;
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
      <p>bash</p>
      {!done ? <Clipboard /> : <ClipboardCheck className="text-secondary" />}
    </button>
  );
}
