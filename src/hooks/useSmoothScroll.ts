import { useCallback } from "react";

interface SmoothScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

export const useSmoothScroll = () => {
  const scrollToElement = useCallback(
    (
      elementId: string,
      options: SmoothScrollOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      }
    ) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView(options);
      }
    },
    []
  );

  const handleHashScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, isHash?: boolean) => {
      if (!isHash) return;
      e.preventDefault();
      const targetId = e.currentTarget.href.split("#")[1];
      scrollToElement(targetId);
    },
    [scrollToElement]
  );

  return { scrollToElement, handleHashScroll };
};
