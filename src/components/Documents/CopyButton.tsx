import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ copyContent }: { copyContent: string }) {
  const [clipBoard, setClipBoard] = useState("");

  return (
    <button
      onClick={() => {
        setClipBoard("");
        navigator.clipboard.writeText(copyContent);
        setClipBoard(copyContent);
      }}
      className="flex items-center justify-center ml-auto"
    >
      {clipBoard === "" ? (
        <Clipboard />
      ) : (
        <ClipboardCheck className="text-secondary" />
      )}
    </button>
  );
}
