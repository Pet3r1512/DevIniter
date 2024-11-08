import Image from "next/image";
import Link from "next/link";
import { TechProps } from "./_index";
import { MouseEventHandler } from "react";

export default function TechSquare({
  item,
  onMouseMove,
}: {
  item: TechProps;
  onMouseMove: MouseEventHandler<HTMLAnchorElement>;
}) {
  const { href, name, logoURL, shadowColor } = item;
  return (
    <Link onMouseMove={onMouseMove} href={href} target="_blank">
      <button
        className={`group/${name} size-16 lg:size-24 bg-white dark:bg-gray-dark lg:hover:drop-shadow-lg ${shadowColor} rounded-lg p-4 flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-105`}
      >
        <Image
          src={"/images/techstacks/" + logoURL}
          alt={name}
          width={0}
          height={0}
          quality={10}
          sizes="(min-width: 1024px) 56px, 32px"
          className="size-8 lg:size-14"
        />
      </button>
    </Link>
  );
}
