import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [islightMode, setIslightMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIslightMode(true);
      document.documentElement.classList.add("light");
    } else {
      localStorage.setItem("theme", "dark");
      setIslightMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (islightMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIslightMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIslightMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {islightMode ? (
        <Moon className="h-6 w-6 text-blue-900" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-300" />
      )}
    </button>
  );
};
