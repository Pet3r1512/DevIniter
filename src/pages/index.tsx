import { Hero } from "@/components/Home/Hero";
import Template from "@/components/Layouts/Template";

export default function Home() {
  return (
    <Template className="w-screen px-0" sectionClassName="max-w-0">
      <Hero />
      <p className="h-[1000px]">content</p>
    </Template>
  );
}
