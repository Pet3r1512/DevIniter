import Head from "next/head";
import { ReactNode, Suspense } from "react";
import { Kanit } from "next/font/google";
import Header from "./Header/_index";
import { cn } from "@/utils/utils";
import Footer from "./Footer/_index";
import { ReactLenis } from "lenis/react";
import PatchNews from "./PatchNews";
import { Triangle } from "lucide-react";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="The Ultimate Starter Templates for Developers"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Pet3r1512/DevIniter/refs/heads/master/public/images/logos/FullLogo.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ReactLenis root>
        <main
          className={cn(
            "scrollbar-hide max-w-screen relative",
            kanit.className
          )}
        >
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
              <Suspense
                fallback={
                  <div className="size-screen dark:bg-black-main bg-white-light" />
                }
              >
                {children}
              </Suspense>
            </div>
          </section>
          <Footer />
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="bg-primary lg:p-2.5 p-1.5 md:p-2 rounded-full flex items-center justify-center fixed lg:bottom-10 bottom-5 right-5 lg:right-10 z-50"
          >
            <Triangle />
          </button>
        </main>
      </ReactLenis>
    </>
  );
}
