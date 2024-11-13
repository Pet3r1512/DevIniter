import { Hero } from "@/components/Home/_index";
import Template from "@/components/Layouts/Template";
import dynamic from "next/dynamic";
import { useInViewStore } from "@/stores/useInViewStore";

const DynamicSupportedTechs = dynamic(
  () => import("../components/Home/SupportTechs/_index"),
  {
    loading: () => <></>,
    ssr: false,
  }
);

const DynamicTemplateDemos = dynamic(
  () => import("../components/Home/TemplateDemos/index"),
  {
    loading: () => <></>,
    ssr: false,
  }
);

const DynamicHighlightSection = dynamic(
  () => import("../components/Home/Highlight/_index"),
  {
    loading: () => <></>,
    ssr: false,
  }
);

const DynamicAnimation = dynamic(
  () => import("../components/Home/Hero/Process"),
  {
    loading: () => <></>,
    ssr: false,
  }
);

const DyanmicFeatures = dynamic(() => import("../components/Home/Features/"), {
  loading: () => <></>,
  ssr: false,
});

export default function Home() {
  const { isHeroInView } = useInViewStore();
  return (
    <Template
      pageName="Developer Initializer"
      className="w-full max-w-none lg:w-screen px-0"
      sectionClassName="max-w-0"
    >
      <Hero />
      <DyanmicFeatures />
      <section className="relative w-screen lg:max-w-7xl min-h-screen mx-auto flex flex-col items-center mt-24 lg:mt-48 lg:mb-24 mb-16 md:mb-48 overflow-x-hidden lg:overflow-visible">
        {isHeroInView && <DynamicAnimation />}
        <DynamicHighlightSection />
        <DynamicSupportedTechs />
        <DynamicTemplateDemos />
      </section>
    </Template>
  );
}
