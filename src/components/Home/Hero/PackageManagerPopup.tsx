import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function PackageManagerPopup() {
  const [isCopied, setIsCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const packageManagers = [
    {
      name: "npm",
      cmd: "npx @deviniter/cli@latest",
    },
    {
      name: "pnpm",
      cmd: "pnpm dlx @deviniter/cli@latest",
      name: "yarn (Beta)",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popover = document.getElementById("popover");
      const trigger = document.getElementById("popover-trigger");
      if (
        popover &&
        !popover.contains(event.target as Node) &&
        trigger &&
        !trigger.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Popover open={open}>
      <PopoverTrigger
        id="popover-trigger"
        onClick={() => {
          setOpen(true);
        }}
        className="transition-all duration-200 ease-linear"
        aria-label={!isCopied ? "Copy command" : "Command copied"}
      >
        {!isCopied ? (
          <Clipboard className="size-3.5 md:size-5 lg:size-6" />
        ) : (
          <ClipboardCheck className="text-secondary size-3.5 md:size-5 lg:size-6" />
        )}
      </PopoverTrigger>
      <PopoverContent id="popover" className="flex flex-col gap-y-1.5 w-fit">
        {packageManagers.map((pkg, index) => {
          return (
            <p
              onClick={() => {
                navigator.clipboard.writeText(pkg.cmd);
                setIsCopied(true);
                setOpen(false);
              }}
              key={index}
              className="cursor-pointer lg:hover:text-primary lg:hover:scale-105 transition-all duration-150 ease-linear"
            >
              {pkg.name}
            </p>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
