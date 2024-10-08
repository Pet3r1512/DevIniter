import { Hero } from "@/components/Home/_index";
import Template from "@/components/Layouts/Template";

export default function Home() {
  return (
    <Template
      pageName="Developer Initializer"
      className="w-full lg:w-screen px-0"
      sectionClassName="max-w-0"
    >
      <Hero />
      <p className="h-[1000px]"></p>
    </Template>
  );
}
