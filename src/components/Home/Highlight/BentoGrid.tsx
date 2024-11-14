import Lightning from "./images/Lightning";
import TnT from "./images/TnT";
import { useRef } from "react";
import { useInView } from "framer-motion";
import HighlightCard, { HighlightCardProps } from "./HighlightCard";
import BuildToScaleSVG from "./svgs/BuildToScaleSVG";
import EffortlessSetupSVG from "./svgs/EffortlessSetupSVG";

export default function BentoGrid() {
  const sectionRef = useRef(null);

  const is1InView = useInView(sectionRef, { once: true });
  const is2InView = useInView(sectionRef, { once: true });
  const is3InView = useInView(sectionRef, { once: true });
  const is4InView = useInView(sectionRef, { once: true });

  const content: HighlightCardProps[] = [
    {
      title: "Instant Launch",
      desc: "Download and ignite your app in seconds.",
      image: <Lightning />,
      style: {
        transform: is1InView ? "none" : "translateX(-200px)",
        opacity: is1InView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      },
    },
    {
      title: "Various TnT",
      desc: "Several tools and packages have been installed for foundational use.",
      image: <TnT />,
      style: {
        transform: is2InView ? "none" : "translateX(200px)",
        opacity: is2InView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
      },
    },
    {
      title: "Built to Scale",
      desc: "Our expert guides help you elevate your app with the right TnT for growth",
      image: <BuildToScaleSVG />,
      style: {
        transform: is3InView ? "none" : "translateX(-200px)",
        opacity: is3InView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      },
    },
    {
      title: "Effortless Setup",
      desc: "Pre-configured Next.js lets you skip setup and start building instantly.",
      image: <EffortlessSetupSVG />,
      style: {
        transform: is4InView ? "none" : "translateX(200px)",
        opacity: is4InView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s",
      },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="grid max-w-7xl mx-auto md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 lg:gap-14"
    >
      {content.map((ctn, idx) => {
        return <HighlightCard key={idx} index={idx} content={ctn} />;
      })}
    </section>
  );
}
