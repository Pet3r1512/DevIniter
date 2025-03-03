import Template from "@/components/Layouts/Template";
import dynamic from "next/dynamic";
import { useInViewStore } from "@/stores/useInViewStore";
import SectionSkeleton from "@/components/Layouts/Skeletons/SectionSkeleton";

const DyanmicFeatures = dynamic(() => import("../components/Home/Features/"), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

const DynamicAnimation = dynamic(
  () => import("../components/Home/Hero/Process"),
  {
    loading: () => <SectionSkeleton />,
    ssr: false,
  }
);

const DynamicHighlightSection = dynamic(
  () => import("../components/Home/Highlight/_index"),
  {
    loading: () => <SectionSkeleton />,
    ssr: false,
  }
);

const DynamicSupportedTechs = dynamic(
  () => import("../components/Home/SupportTechs/_index"),
  {
    loading: () => <SectionSkeleton />,
    ssr: false,
  }
);

const DynamicTemplateDemos = dynamic(
  () => import("../components/Home/TemplateDemos/index"),
  {
    loading: () => <SectionSkeleton />,
    ssr: false,
  }
);

const DynamicOpenSource = dynamic(
  () => import("../components/Home/OpenSource/_index"),
  {
    loading: () => <SectionSkeleton />,
    ssr: false,
  }
);

const DynamicHero = dynamic(() => import("../components/Home/_index"), {
  loading: () => (
    <SectionSkeleton className="h-[calc(100vh-22.5rem)] lg:h-[85dvh]" />
  ),
  ssr: false,
});

export default function Home() {
  const { isHeroInView } = useInViewStore();
  return (
    <Template
      pageName="Developer Initializer"
      className="w-full max-w-screen lg:w-screen px-0"
      sectionClassName="max-w-0"
    >
      <DynamicHero />
      <DyanmicFeatures />
      {isHeroInView && <DynamicAnimation />}
      <section className="relative w-screen lg:max-w-7xl min-h-screen lg:mx-auto flex flex-col items-center mt-24 lg:mt-48 lg:mb-24 mb-16 md:mb-48">
        <DynamicHighlightSection />
        <DynamicSupportedTechs />
        <DynamicTemplateDemos />
        <DynamicOpenSource />
      </section>
    </Template>
  );
}
