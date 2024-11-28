import { useState } from "react";
import CodeBlock from "./CodeBlock";

interface CodeBlockWithPkgProps {
  npmCommand: string;
  pnpmCommand: string;
}

export default function CodeBlockWithPkg({
  npmCommand,
  pnpmCommand,
}: CodeBlockWithPkgProps) {
  const [selectedPM, setSelectedPM] = useState("npm");

  const packageManagers = [
    {
      name: "npm",
      command: npmCommand,
      icon: (
        <svg
          className="h-6 w-auto"
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
    },
    {
      name: "pnpm",
      command: pnpmCommand,
      icon: (
        <svg
          className="h-4 w-auto"
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
    },
  ];

  const selectedCommand = packageManagers.find(
    (pm) => pm.name === selectedPM
  )?.command;

  return (
    <div className="w-full my-5 p-4 dark:bg-[#17191e] bg-white dark:text-white rounded-lg shadow-lg">
      <div className="flex space-x-4 pb-2">
        {packageManagers.map((pm, index) => (
          <button
            key={index}
            onClick={() => setSelectedPM(pm.name)}
            className={`px-4 flex items-center dark:lg:hover:bg-gray-800 lg:hover:bg-gray-300 rounded-t-xl gap-x-2.5 py-2 font-bold transition-all duration-150 ease-linear border-b-2 ${
              selectedPM === pm.name
                ? "border-primary dark:text-white text-black"
                : "border-transparent"
            }`}
          >
            {pm.icon}
            {pm.name}
          </button>
        ))}
      </div>
      <CodeBlock className="my-0 p-0" lang="bash" code={selectedCommand!} />
    </div>
  );
}
