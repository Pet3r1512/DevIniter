import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CopyButton from "./CopyButton";

export default function ScriptBlock() {
  const scripts = [
    {
      value: "pnpm",
      script: "pnpx deviniter@latest",
    },
    {
      value: "npm",
      script: "npx deviniter@latest",
    },
  ];

  return (
    <Tabs
      defaultValue="pnpm"
      className="w-full dark:bg-[#131412] bg-gray-light !p-5 rounded-2xl mt-6"
    >
      <TabsList className="w-fit">
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        <TabsTrigger value="npm">npm</TabsTrigger>
      </TabsList>
      {scripts.map((script, index) => {
        return (
          <TabsContent key={index} value={script.value} className="w-full">
            <p className="text-primary font-semibold text-lg pl-5">
              <span className="dark:text-gold text-black-main">$ </span>
              {script.script}
            </p>
            <CopyButton copyContent="pnpx @deviniter@latest" />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
