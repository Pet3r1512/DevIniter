import Head from "next/head";
import { ReactNode } from "react";
import { Kanit } from "next/font/google";
import Header from "./Header/_index";
import { cn } from "@/utils/utils";
import Footer from "./Footer/_index";

export const kanit = Kanit({
  weight: "400",
  subsets: ["latin"],
});

export default function Template({
  children,
  pageName = "Home",
  className,
}: {
  children: ReactNode;
  pageName?: string;
  className?: string;
}) {
  const fullPageName = `DevIniter | ${pageName}`;
  return (
    <>
      <Head>
        <title>{fullPageName}</title>
      </Head>
      <main className={cn("scrollbar-hide", kanit.className)}>
        <section className="flex flex-col max-w-[1440px] mx-auto lg:min-h-screen light:bg-white">
          <Header />
          <div
            className={cn(
              "mx-auto my-12 w-full max-w-7xl px-6 min-h-screen",
              className
            )}
          >
            {children}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
