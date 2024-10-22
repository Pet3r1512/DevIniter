import SectionTitle from "../SectionTitle";
import TechSquare from "./TechSquare";

export default function SupportedTechs() {
  return (
    <section className="flex flex-col gap-y-24 lg:gap-y-56 justify-center min-h-screen">
      <SectionTitle
        title="Wonderfull Supported Technologies and Tools"
        subtitle=""
      />
      <TechSquare
        href="https://www.typescriptlang.org/"
        name="TypeScript"
        logoURL="/images/techstacks/typescript.png"
        shadowColor="lg:hover:shadow-[#3178C6]"
      />
    </section>
  );
}
