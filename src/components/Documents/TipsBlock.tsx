import { ReactNode } from "react";

export default function TipsBlock({ tips }: { tips: ReactNode[] }) {
  return (
    <div className="w-full rounded-2xl border-[1.5px] dark:border-white border-black mt-6 px-5 py-4">
      <p className="font-bold">🪄 Tips For You</p>
      {tips.map((tip, index) => {
        return <p key={index}>{tip}</p>;
      })}
    </div>
  );
}
