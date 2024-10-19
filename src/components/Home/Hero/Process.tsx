import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Process() {
  return (
    <section className="flex items-center justify-center w-screen lg:mt-16 mt-32">
      <DotLottieReact
        className="lg:w-3/5 h-auto relative z-10"
        src="/animations/animation.lottie"
        loop
        autoplay
      />
    </section>
  );
}
