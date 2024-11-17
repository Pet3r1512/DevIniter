import Introduction from "./Hero/Introduction";

export function Hero() {
  return (
    <section className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 min-h-[calc(100vh-22.5rem)] lg:min-h-[85dvh]">
      <Introduction />
    </section>
  );
}
