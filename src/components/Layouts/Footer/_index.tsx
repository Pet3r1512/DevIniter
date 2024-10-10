import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="dark:bg-black bg-white h-36 flex flex-col gap-y-1.5 items-center justify-center cursor-default font-semibold dark:text-gray text-black-main text-lg drop-shadow-[-50px_0_50px_rgba(0,0,0,0.25)]">
      <p>Released under MIT license</p>
      <p data-testid="author" className="flex items-center gap-x-0.5">
        Copyright <Copyright /> 2024-present by{" "}
        <span className="bg-gradient-to-br from-secondary via-primary dark:to-white to-secondary inline-block text-transparent bg-clip-text font-extrabold">
          DevIniter.
        </span>
      </p>
    </footer>
  );
}
