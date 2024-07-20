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
// import { useTheme } from 'next-themes';
// import ThemeSwitch from '@/components/ThemeSwitch';
import Darkmode from './darkmode';

const components: { title: string; href: string }[] = [
  {
    title: 'ABOUT',
    href: '#about',
  },
  {
    title: 'SKILL',
    href: '#skill',
  },
  {
    title: 'WORKS',
    href: '#works',
  },
  {
    title: 'CONTACT',
    href: '#contact',
  },
];

const Header = () => {
  // const { setTheme } = useTheme();
  return (
    <div className="sticky top-0 z-50 px-8 py-5 mb-8 flex items-center justify-between border-b dark:border-slate-500 bg-secondary-light text-primary-dark dark:bg-primary-dark dark:text-secondary-light duration-500">
      <Link href="/" className="font-medium text-lg md:text-2xl lg:text-3xl">
        YK Portfolio
      </Link>

      <div className="flex items-center gap-10">
        <nav className="hidden md:flex gap-10">
          <Link
            href="#about"
            className="text-sm lg:text-lg hover:opacity-75 transition-opacity duration-300"
          >
            ABOUT
          </Link>
          <Link
            href="#skill"
            className="text-sm lg:text-lg hover:opacity-75 transition-opacity duration-300"
          >
            SKILL
          </Link>
          <Link
            href="#works"
            className="text-sm lg:text-lg hover:opacity-75 transition-opacity duration-300"
          >
            WORKS
          </Link>
          <Link
            href="#contact"
            className="text-sm lg:text-lg hover:opacity-75 transition-opacity duration-300"
          >
            CONTACT
          </Link>
        </nav>

        <div className="flex sm:gap-2 items-center">
          {/* sm:Menu */}
          <div className="md:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" text-primary-dark dark:bg-primary-dark dark:text-secondary-light transition duration-500">
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[130px] gap-3 p-4  text-primary-dark dark:bg-primary-dark dark:text-secondary-light">
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
            <Darkmode />
            {/* <ThemeSwitch /> */}
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
