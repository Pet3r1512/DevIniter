import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useState, createContext, ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";
import { describe, expect, it } from "vitest";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const MockThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

describe("ThemeToggle", () => {
  it("toggles theme between light and dark", () => {
    render(
      <MockThemeProvider>
        <ThemeToggle />
      </MockThemeProvider>
    );

    const button = screen.getByTestId("theme-togger");
    expect(button).toHaveTextContent("🌙 Dark");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Light ☀️");
    expect(button).not.toHaveTextContent("🌙 Dark");

    fireEvent.click(button);
    expect(button).toHaveTextContent("🌙 Dark");
    expect(button).not.toHaveTextContent("Light ☀️");
  });
});
