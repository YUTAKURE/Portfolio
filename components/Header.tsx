'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const components: { title: string; href: string }[] = [
  {
    title: 'ABOUT',
    href: '/docs/primitives/alert-dialog',
  },
  {
    title: 'SKILL',
    href: '/docs/primitives/hover-card',
  },
  {
    title: 'WORKS',
    href: '/docs/primitives/progress',
  },
  {
    title: 'CONTACT',
    href: '/docs/primitives/scroll-area',
  },
];

const Header = () => {
  const { setTheme } = useTheme();
  return (
    <div className="px-8 py-5 mb-8 flex items-center justify-between border-b">
      <Link href="/" className="font-medium text-lg md:text-2xl lg:text-3xl">
        YK Portfolio
      </Link>

      <div className="flex items-center gap-10">
        <nav className="hidden md:flex gap-10">
          <Link
            href="#about"
            className="text-sm lg:text-lg hover:opacity-75 duration-300"
          >
            ABOUT
          </Link>
          <Link
            href="#skill"
            className="text-sm lg:text-lg hover:opacity-75 duration-300"
          >
            SKILL
          </Link>
          <Link
            href="/"
            className="text-sm lg:text-lg hover:opacity-75 duration-300"
          >
            WORKS
          </Link>
          <Link
            href="/"
            className="text-sm lg:text-lg hover:opacity-75 duration-300"
          >
            CONTACT
          </Link>
        </nav>

        <div className="flex sm:gap-2">
          {/* sm:Menu */}
          <div className="md:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[130px] gap-3 p-4">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Dark mode */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
