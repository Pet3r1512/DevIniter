import BentoGrid from "./BentoGrid";
import Title from "./Title";

export default function Highlight() {
  return (
    <section className="flex flex-col gap-y-24 lg:gap-y-56 justify-center min-h-screen">
      <Title />
      <BentoGrid />
    </section>
  );
}
