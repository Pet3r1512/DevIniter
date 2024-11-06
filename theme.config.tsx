/* eslint-disable import/no-anonymous-default-export */
import Logo from "@/components/Layouts/Header/Logo";
import { DocsThemeConfig } from "nextra-theme-docs";

const themeConfig: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="DevIniter" />
      <meta property="og:description" content="Ultimate Starter Tempaltes" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
      <title>DevIniter Docs | Blazing Starter Templates</title>
    </>
  ),

  logo: <Logo />,
  project: {
    link: "https://github.com/Pet3r1512/DevIniter",
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a
          href="https://github.com/Pet3r1512/DevIniter"
          target="_blank"
          style={{
            fontWeight: 800,
            color: "#11998E",
          }}
        >
          DevIniter
        </a>
        . All Rights Reserved.
      </span>
    ),
  },
};

export default themeConfig;
