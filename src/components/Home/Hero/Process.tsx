import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Process() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen lg:mt-16 mt-32 bg-gray-dark dark:bg-black-main">
      <DotLottieReact
        className="lg:w-3/5 lg:max-w-6xl h-auto relative z-10"
        src="/animations/animation.lottie"
        loop
        autoplay
      />
    </div>
  );
}
