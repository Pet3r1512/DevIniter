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
      icon: (
        <svg
          className="w-6 h-auto"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M0 10V20H9V22H16V20H32V10H0Z" fill="#CB3837"></path>{" "}
            <path
              d="M5.46205 12H2V18H5.46205V13.6111H7.22344V18H8.98482V12H5.46205ZM10.7462 12V20H14.269V18H17.731V12H10.7462ZM15.9696 16.3889H14.269V13.6111H15.9696V16.3889ZM22.9545 12H19.4924V18H22.9545V13.6111H24.7158V18H26.4772V13.6111H28.2386V18H30V12H22.9545Z"
              fill="white"
            ></path>{" "}
          </g>
        </svg>
      ),
      cmd: "npx @deviniter/cli",
    },
    {
      name: "pnpm",
      icon: (
        <svg
          className="w-4 h-auto"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>file_type_light_pnpm</title>
            <path d="M30,10.75H21.251V2H30Z" fill="#f9ad00"></path>
            <path d="M20.374,10.75h-8.75V2h8.75Z" fill="#f9ad00"></path>
            <path d="M10.749,10.75H2V2h8.749Z" fill="#f9ad00"></path>
            <path d="M30,20.375H21.251v-8.75H30Z" fill="#f9ad00"></path>
            <path d="M20.374,20.375h-8.75v-8.75h8.75Z" fill="#4e4e4e"></path>
            <path d="M20.374,30h-8.75V21.25h8.75Z" fill="#4e4e4e"></path>
            <path d="M30,30H21.251V21.25H30Z" fill="#4e4e4e"></path>
            <path d="M10.749,30H2V21.25h8.749Z" fill="#4e4e4e"></path>
          </g>
        </svg>
      ),
      cmd: "pnpm dlx @deviniter/cli",
    },
    {
      name: "yarn (Beta)",
      icon: (
        <svg
          viewBox="0 0 32 32"
          className="w-6 h-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>file_type_yarn</title>
            <path
              d="M28.208,24.409a10.493,10.493,0,0,0-3.959,1.822,23.743,23.743,0,0,1-5.835,2.642,1.632,1.632,0,0,1-.983.55A62.228,62.228,0,0,1,10.984,30c-1.163.009-1.876-.3-2.074-.776a1.573,1.573,0,0,1,.866-2.074,3.759,3.759,0,0,1-.514-.379c-.171-.171-.352-.514-.406-.388-.225.55-.343,1.894-.947,2.5-.83.839-2.4.559-3.328.072-1.019-.541.072-1.813.072-1.813a.73.73,0,0,1-.992-.343,4.847,4.847,0,0,1-.667-2.949,5.374,5.374,0,0,1,1.749-2.895,9.334,9.334,0,0,1,.658-4.4,10.445,10.445,0,0,1,3.165-3.661S6.628,10.747,7.35,8.817c.469-1.262.658-1.253.812-1.308a3.633,3.633,0,0,0,1.452-.857,5.265,5.265,0,0,1,4.41-1.7S15.2,1.4,16.277,2.09a18.349,18.349,0,0,1,1.533,2.886s1.281-.748,1.425-.469a11.334,11.334,0,0,1,.523,6.132,14.01,14.01,0,0,1-2.6,5.411c-.135.225,1.551.938,2.615,3.887.983,2.7.108,4.96.262,5.212.027.045.036.063.036.063s1.127.09,3.391-1.308A8.5,8.5,0,0,1,27.739,22.3a1.081,1.081,0,0,1,.469,2.11Z"
              fill="#2188b6"
            ></path>
          </g>
        </svg>
      ),
      cmd: "yarn dlx @deviniter/cli",
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
              className="cursor-pointer lg:hover:text-primary lg:hover:scale-105 transition-all duration-150 ease-linear flex items-center gap-x-2.5"
            >
              <div className="w-6 h-auto">{pkg.icon}</div>
              <p className="font-semibold">{pkg.name}</p>
            </p>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
