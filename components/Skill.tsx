import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiSupabase,
  SiGit,
  SiGithub,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiDavinciresolve,
} from 'react-icons/si';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Skill = () => {
  const icons_1: { iconComp: React.FC; iconName: string }[] = [
    { iconComp: SiHtml5, iconName: 'HTML' },
    { iconComp: SiCss3, iconName: 'CSS' },
    { iconComp: SiJavascript, iconName: 'JavaScript' },
    { iconComp: SiTypescript, iconName: 'Typescript' },
    { iconComp: SiReact, iconName: 'React' },
    { iconComp: SiNextdotjs, iconName: 'Next.js' },
  ];

  const icons_2: { iconComp: React.FC; iconName: string }[] = [
    { iconComp: SiTailwindcss, iconName: 'Tailwind CSS' },
    { iconComp: SiBootstrap, iconName: 'Bootstrap' },
    { iconComp: SiShadcnui, iconName: 'shadcn/ui' },
    { iconComp: SiSupabase, iconName: 'Supabase' },
    { iconComp: SiGit, iconName: 'Git' },
    { iconComp: SiGithub, iconName: 'GitHub' },
  ];

  const icons_3: { iconComp: React.FC; iconName: string }[] = [
    { iconComp: SiAdobepremierepro, iconName: 'Premiere Pro' },
    { iconComp: SiAdobephotoshop, iconName: 'Photoshop' },
    { iconComp: SiDavinciresolve, iconName: 'DaVinci Resolve' },
  ];

  return (
    <div className="w-3/4 px-15 py-24 mx-auto text-center">
      <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-medium pb-3 mb-5 w-15 border-b border-gray-500">
          SKILL
        </h1>
        <p className="w-5/6 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div>
        <div className="flex gap-3 md:gap-5 text-3xl md:text-5xl mb-3 justify-center">
          {icons_1.map((Icon_1, index) => (
            <span
              key={index}
              className="hover:scale-110 transition-transform duration-300"
            >
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Icon_1.iconComp />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{Icon_1.iconName}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          ))}
        </div>

        <div className="flex gap-3 md:gap-5 text-3xl md:text-5xl justify-center">
          {icons_2.map((Icon_2, index) => (
            <span
              key={index}
              className="hover:scale-110 transition-transform duration-300"
            >
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Icon_2.iconComp />
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{Icon_2.iconName}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          ))}
        </div>

        <div className="flex gap-3 md:gap-5 text-3xl md:text-5xl mt-14 justify-center">
          {icons_3.map((Icon_3, index) => (
            <span
              key={index}
              className="hover:scale-110 transition-transform duration-300"
            >
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Icon_3.iconComp />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{Icon_3.iconName}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
