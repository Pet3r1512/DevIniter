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
        className={`group/${name} size-16 lg:size-24 bg-white dark:bg-gray-dark lg:hover:drop-shadow-lg ${shadowColor} rounded-lg p-4 flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-105`}
      >
        <Image
          src={logoURL}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="size-8 lg:size-14"
        />
      </button>
    </Link>
  );
}
