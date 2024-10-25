import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CopyButton from "./CopyButton";
import MacOSNavBar from "./Terminal";

type Props = {
  value: string;
  script: string;
};

export default function InstallBlock({ command }: { command: Props[] }) {
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
    <div className="mt-6">
      <MacOSNavBar />
      <Tabs
        defaultValue="pnpm"
        className="w-full dark:bg-[#131412] bg-gray-light !px-5 !py-4 group rounded-b-2xl"
      >
        <TabsList className="w-fit">
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          <TabsTrigger value="npm">npm</TabsTrigger>
        </TabsList>
        {!command
          ? scripts.map((script, index) => {
              return (
                <TabsContent
                  key={index}
                  value={script.value}
                  className="w-full !flex"
                >
                  <p className="dark:text-white text-black-main pl-5 flex-1">
                    <span className="dark:text-gold text-primary">$ </span>
                    {script.script}
                  </p>
                  <CopyButton
                    className="max-w-1/2 lg:group-hover:visible lg:invisible hidden lg:block transition-all duration-150 ease-linear"
                    copyContent={script.script}
                  />
                </TabsContent>
              );
            })
          : command.map((cmd, index) => {
              return (
                <TabsContent key={index} value={cmd.value} className="w-full">
                  <p className="dark:text-white text-black-main pl-5">
                    <span className="dark:text-gold text-primary">$ </span>
                    {cmd.script}
                  </p>
                  <CopyButton
                    className="lg:group-hover:visible lg:invisible hidden lg:block transition-all duration-150 ease-linear"
                    copyContent={cmd.script}
                  />
                </TabsContent>
              );
            })}
      </Tabs>
    </div>
  );
}
