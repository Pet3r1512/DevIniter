import { Terminal } from "lucide-react";
import CopyButton from "./CopyButton";

export default function ScriptBlock({
  script,
}: {
  script: {
    command: string;
    content: string;
  };
}) {
  return (
    <div className="group w-full mt-6 bg-black rounded-2xl">
      <div className="flex items-center justify-between h-1/5 px-5 py-4">
        <p className="flex items-center">
          <Terminal />
          Terminal
        </p>
        <CopyButton
          className="lg:group-hover:visible lg:invisible hidden lg:block transition-all duration-150 ease-linear"
          copyContent={`${script.command} ${script.content}`}
        />
      </div>
      <div className="dark:bg-[#131412] bg-gray-light h-4/5 px-5 py-4 flex flex-col gap-y-2.5 rounded-b-2xl">
        <div className="flex items-center justify-between">
          <p>
            <span className="dark:text-gold text-primary">
              {script.command}
            </span>{" "}
            {script.content}
          </p>
        </div>
      </div>
    </div>
  );
}
