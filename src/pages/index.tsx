import { Hero } from "@/components/Home/_index";
import Highlight from "@/components/Home/Highlight/_index";
import Template from "@/components/Layouts/Template";

export default function Home() {
  return (
    <Template
      pageName="Developer Initializer"
      className="w-full max-w-none lg:w-screen px-0"
      sectionClassName="max-w-0"
    >
      <Hero />
      <section className="w-screen lg:max-w-7xl min-h-screen mx-auto flex flex-col items-center mt-[50vh] sm:mt-[15vh] lg:mt-[35vh] lg:mb-24 mb-16">
        <Highlight />
      </section>
    </Template>
  );
}
