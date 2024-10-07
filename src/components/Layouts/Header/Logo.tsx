import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={"/images/logos/FullLogo.png"}
      alt=""
      width={0}
      height={0}
      sizes="100vw"
      className="lg:h-12 w-auto h-8"
    />
  );
}
