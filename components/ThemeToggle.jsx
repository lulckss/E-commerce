import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Verifica se o componente foi montado para evitar problemas de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita renderização no SSR

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white border border-gray-700 dark:border-white bg-gray-400 dark:bg-neutral-700 rounded"
      >
        {theme === "dark" ? (
          <FiSun className="text-white" size={20} />
        ) : (
          <FiMoon className="text-black" size={20} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
