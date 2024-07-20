'use client';

import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { FiSun, FiMoon } from 'react-icons/fi';

const Darkmode = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <div
      onClick={() => setTheme(activeTheme)}
      aria-label="Theme Switcher"
      className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
    >
      {activeTheme === 'dark' ? (
        <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
      ) : (
        <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
      )}
    </div>
  );
};

export default Darkmode;
