import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-testid="theme-togger"
      onClick={toggleTheme}
      className="h-8 lg:h-10 w-auto rounded-full lg:text-lg bg-gray-500 dark:bg-gray-200 transition-all dark:text-black text-white px-2.5"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
