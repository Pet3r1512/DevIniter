import CopyButton from "@/components/Documents/CopyButton";
import { BorderTrail } from "@/components/ui/aceternity/border-trail";

export default function InstallBox() {
  return (
    <div className="flex items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-3 lg:p-5 relative !dark:border-black !border-white dark:bg-black bg-white gap-x-2.5">
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px #11998E, 0 0 100px 60px #38EF7D, 0 0 140px 90px #38EF7D",
        }}
        size={100}
      />
      <p className="text-sm md:text-base lg:text-xl">
        pnpm dlx @deviniter/cli@latest
      </p>
      <CopyButton
        copyContent="pnpm dlx @deviniter/cli@latest"
        className="lg:hover:bg-gray transition-all duration-200 ease-linear size-7 md:size-9 lg:size-12 flex items-center justify-center rounded-lg"
      />
    </div>
  );
}
