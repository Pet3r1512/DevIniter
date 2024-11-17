import { BorderTrail } from "@/components/ui/aceternity/border-trail";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function InstallBox() {
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
    <div className="flex items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-3 lg:p-5 relative !dark:border-black !border-white dark:bg-black bg-white gap-x-2.5">
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={100}
      />
      <p className="text-sm md:text-base lg:text-xl">
        npx @deviniter/cli@latest
      </p>
      <Popover open={open}>
        <PopoverTrigger
          id="popover-trigger"
          onClick={() => {
            setOpen(true);
          }}
          className="transition-all duration-200 ease-linear"
        >
          {!isCopied ? (
            <Clipboard size={20} />
          ) : (
            <ClipboardCheck className="text-secondary" size={20} />
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
                className="cursor-pointer lg:hover:text-primary transition-all duration-150 ease-linear"
              >
                {pkg.name}
              </p>
            );
          })}
        </PopoverContent>
      </Popover>
    </div>
  );
}
