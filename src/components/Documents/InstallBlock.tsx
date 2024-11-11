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
      value: "npm",
      script: "npx deviniter@latest",
    },
    {
      value: "pnpm",
      script: "pnpx deviniter@latest",
    },
  ];

  return (
    <div className="mt-6 w-full">
      <MacOSNavBar />
      <Tabs
        defaultValue="npm"
        className="w-full dark:bg-[#131412] bg-gray-light !px-5 !py-4 group rounded-b-2xl"
      >
        <TabsList className="w-fit">
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
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
