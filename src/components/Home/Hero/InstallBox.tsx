import { BorderTrail } from "@/components/ui/aceternity/border-trail";
import PackageManagerPopup from "./PackageManagerPopup";

export default function InstallBox() {
  return (
    <div className="flex items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-3 lg:p-5 relative !dark:border-black !border-white dark:bg-black bg-white gap-x-2.5 h-10 w-52 md:h-11 md:w-60 lg:h-16 lg:w-80">
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
      <PackageManagerPopup />
    </div>
  );
}
