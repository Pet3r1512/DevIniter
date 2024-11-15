import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import { useInView } from "framer-motion";

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="py-16 min-h-screen flex flex-col gap-y-24 lg:gap-y-48 justify-center items-center max-w-7xl mx-auto px-8 lg:mx-0"
    >
      <SectionTitle
        title="Always free and Open Source"
        subtitle="Empowering Developers, One Line of Code at a Time"
      />
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className="flex flex-col gap-y-8 lg:gap-y-10 lg:text-xl"
      >
        <p>
          {
            "At DevIniter, we believe that great ideas and powerful tools should be accessible to everyone. That’s why all of our templates and resources are completely free and open source. Whether you're a seasoned developer or just starting out, we’re here to support your journey with robust, customizable, and production-ready templates."
          }
        </p>
        <p>
          {
            "We’re committed to fostering a collaborative community where developers can learn, contribute, and build together. By sharing our code openly, we empower you to modify, enhance, and tailor it to your specific needs, ensuring you have the freedom to create without limitations."
          }
        </p>
        <p>{"Let’s redefine what's possible — together, and for free."}</p>
        <p className="self-end font-bold text:lg text-primary cursor-default">
          Creator of DevIniter with <span className="text-red-600">❤</span>
        </p>
      </div>
    </section>
  );
}
