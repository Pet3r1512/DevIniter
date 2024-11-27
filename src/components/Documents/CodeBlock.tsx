import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

export default function CodeBlock({
  code,
  filename,
  lang,
}: {
  code: string;
  filename?: string;
  lang: string;
}) {
  const { theme } = useTheme();
  const [htmlOutput, setHtmlOutput] = useState<string | null>(null);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const out = await codeToHtml(code, {
          lang: lang || "plaintext",
          themes: {
            dark: "houston",
            light: "one-light",
          },
        });
        setHtmlOutput(out);
      } catch (error) {
        console.error("Failed to generate code block HTML:", error);
        setHtmlOutput(null);
      }
    };

    fetchCode();
  }, [code, theme, lang]);

  return (
    <div
      className="my-5 shiki-codeblock"
      dangerouslySetInnerHTML={{ __html: htmlOutput || "" }}
    />
  );
}
