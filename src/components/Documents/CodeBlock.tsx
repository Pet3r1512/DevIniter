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
    <div className="shiki-container dark:bg-[#17191e] bg-[#fff] rounded-2xl my-5 p-5">
      {filename && (
        <p className="cursor-default text-gray-500 font-semibold italic select-none">
          {filename}
        </p>
      )}
      <div
        className="shiki-codeblock"
        dangerouslySetInnerHTML={{ __html: htmlOutput || "" }}
      />
    </div>
  );
}
