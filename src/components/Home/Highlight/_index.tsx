import SectionTitle from "../SectionTitle";
import BentoGrid from "./BentoGrid";

export default function Highlight() {
  return (
    <section className="flex flex-col gap-y-24 lg:gap-y-48 justify-center items-center h-full min-h-screen mt-0 lg:mt-32 overflow-x-hidden">
      <SectionTitle
        title={
          <p>
            Next.js reimagined
            <br /> Powered by DevIniter
          </p>
        }
        subtitle="Revolutionizing how fast and simple for kicking developers projects off."
      />
      <BentoGrid />
    </section>
  );
}
