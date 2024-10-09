import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/utils";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-testid="theme-togger"
      onClick={toggleTheme}
      className={cn(
        "h-8 lg:h-10 px-5 py-2 w-auto rounded-full lg:text-lg bg-gray-500 dark:bg-gray-200 transition-all dark:text-black text-white duration-150 ease-linear flex items-center justify-center ",
        className
      )}
    >
      {theme === "light" ? "🌙 Dark" : "Light ☀️"}
    </button>
  );
};

export default ThemeToggle;
