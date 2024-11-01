import GradientBackgroundButton from "@/components/Layouts/buttons/Button";
import Template from "@/components/Layouts/Template";

export default function Error404() {
  return (
    <Template
      pageName="Error"
      className="w-full max-w-none lg:w-screen px-0"
      sectionClassName="max-w-0"
    >
      <div className="flex flex-col gap-y-5 items-center justify-center lg:h-[85dvh] dark:bg-black-main bg-white-light">
        <h1 className="lg:text-4xl bg-gradient-to-br from-secondary via-primary dark:to-white to-secondary inline-block text-transparent bg-clip-text font-bold">
          Page Not Found!
        </h1>
        <p>
          Looks like you are lost! Please go back to homepage or report for us.
        </p>
        <div className="flex items-center gap-x-2.5">
          <GradientBackgroundButton
            text="Home"
            href="/"
            className="bg-gradient-to-br from-primary via-secondary to-primary-light"
          />
          <GradientBackgroundButton
            text="Report"
            href="https://github.com/Pet3r1512/DevIniter/issues/new?labels=bug&template=bug-report---.md"
            target="_blank"
            className="dark:text-white-light text-white bg-gradient-to-br dark:from-white dark:to-gray-dark from-black-main to-gray"
          />
        </div>
      </div>
    </Template>
  );
}
