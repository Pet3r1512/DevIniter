import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import { useInView } from "framer-motion";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      title: "Modern Stack",
      description:
        "Built with Next.js, TypeScript, and Tailwind CSS for a powerful and flexible development experience",
      icon: "🚀",
    },
    {
      title: "Best Practices",
      description:
        "Following industry standards and patterns for maintainable, scalable, and secure applications",
      icon: "✨",
    },
    {
      title: "Developer Experience",
      description:
        "Enhanced DX with hot reloading, TypeScript support, and intuitive project structure",
      icon: "👨‍💻",
    },
    {
      title: "Performance First",
      description:
        "Optimized for speed with server-side rendering, code splitting, and modern build tools",
      icon: "⚡",
    },
    {
      title: "Ready to Scale",
      description:
        "Built with scalability in mind, from startup to enterprise-level applications",
      icon: "📈",
    },
    {
      title: "Perfect for Beginners & Freelancers",
      description:
        "Comprehensive documentation, making it ideal for learning and quick project deployment",
      icon: "🎯",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-screen px-8 lg:px-0 flex flex-col gap-y-24 lg:gap-y-56 items-center justify-center min-h-screen mt-12 lg:mt-0"
    >
      <SectionTitle
        title="A solid foundation to start creating your own products"
        subtitle="Everything you need to build modern web applications with best practices and proven technologies"
      />
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s",
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="!w-fit p-6 rounded-2xl shadow-2xl lg:max-w-lg isolate ring-1 dark:bg-black/50 bg-white/75 ring-black/5 lg:hover:scale-105 lg:dark:hover:bg-black lg:hover:bg-white transition-all duration-200 ease-linear"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <p className="text-xl font-bold mb-2">{feature.title}</p>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
