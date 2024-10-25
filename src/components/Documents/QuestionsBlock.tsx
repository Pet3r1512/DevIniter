import { Terminal } from "lucide-react";

export default function QuestionBlock() {
  return (
    <div className="w-full mt-6 bg-black rounded-2xl">
      <div className="flex items-center h-1/5 px-5 py-4">
        <Terminal />
        Terminal
      </div>
      <div className="dark:bg-[#131412] bg-gray-light h-4/5 px-5 py-4 flex flex-col gap-y-2.5 rounded-b-2xl">
        <p>{"What is your project's name: dev-app"}</p>
        <p>{"Choose a template: "}</p>
      </div>
    </div>
  );
}
