'use client';

import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { FiSun, FiMoon } from 'react-icons/fi';

const Darkmode = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <div
      onClick={() => setTheme(activeTheme)}
      aria-label="Theme Switcher"
      className="ml-8  p-3 shadow-sm rounded-xl cursor-pointer"
    >
      {activeTheme === 'dark' ? (
        <FiMoon className=" hover:text-gray-400 text-xl duration-300" />
      ) : (
        <FiSun className=" hover:text-gray-300 text-xl duration-300" />
      )}
    </div>
  );
};

export default Darkmode;
