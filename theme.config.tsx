/* eslint-disable import/no-anonymous-default-export */
import Logo from "@/components/Layouts/Header/Logo";
import { DocsThemeConfig } from "nextra-theme-docs";

const themeConfig: DocsThemeConfig = {
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
