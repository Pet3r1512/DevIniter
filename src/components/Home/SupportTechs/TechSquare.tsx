import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  href: string;
  logoURL: string;
  shadowColor: string;
};

export default function TechSquare({
  name,
  href,
  logoURL,
  shadowColor,
}: Props) {
  return (
    <Link href={href} target="_blank">
      <button
        className={`group/${name} lg:size-24 size-[75px] bg-white dark:bg-gray-dark lg:hover:drop-shadow-2xl ${shadowColor} rounded-lg p-4 flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-105`}
      >
        <Image
          src={logoURL}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="!size-14"
        />
      </button>
    </Link>
  );
}
