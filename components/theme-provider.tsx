'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <div className=" bg-secondary-light dark:bg-primary-dark">
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </div>
  );
}
