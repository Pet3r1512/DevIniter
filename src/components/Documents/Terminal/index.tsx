import { Maximize2, Minus, Terminal, X } from "lucide-react";

export default function MacOSNavBar() {
  return (
    <section className=" dark:bg-black bg-white rounded-t-2xl px-5 py-4">
      <div className="flex items-center gap-x-2.5">
        <div className="size-3.5 rounded-full flex items-center justify-center text-black-main bg-[#e63946]">
          <X size={10} />
        </div>
        <div className="size-3.5 rounded-full flex items-center justify-center text-black-main bg-gold">
          <Minus size={10} />
        </div>
        <div className="size-3.5 rounded-full flex items-center justify-center text-black-main bg-[#70e000]">
          <Maximize2 size={8} />
        </div>
      </div>
      <div className="flex items-center h-1/5 mt-2.5">
        <Terminal />
        Terminal
      </div>
    </section>
  );
}
