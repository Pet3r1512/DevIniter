import Head from "next/head";
import { ReactNode } from "react";
import { Kanit } from "next/font/google";
import Header from "./Header/_index";
import { cn } from "@/utils/utils";
import Footer from "./Footer/_index";
import { ReactLenis } from "lenis/react";
import PatchNews from "./PatchNews";

export const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export default function Template({
  children,
  pageName = "Home",
  sectionClassName,
  className,
}: {
  children: ReactNode;
  pageName?: string;
  sectionClassName?: string;
  className?: string;
}) {
  const fullPageName = `DevIniter | ${pageName}`;
  return (
    <>
      <Head>
        <title>{fullPageName}</title>
      </Head>
      <ReactLenis root>
        <main className={cn("scrollbar-hide", kanit.className)}>
          <PatchNews />
          <Header />
          <section
            className={cn(
              "flex flex-col lg:min-h-screen light:bg-white bg-black-main",
              sectionClassName
            )}
          >
            <div
              className={cn(
                "mx-auto w-full max-w-7xl px-6 min-h-screen",
                className
              )}
            >
              {children}
            </div>
          </section>
          <Footer />
        </main>
      </ReactLenis>
    </>
  );
}
