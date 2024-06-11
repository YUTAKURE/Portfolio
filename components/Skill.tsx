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
} from 'react-icons/si';

const Skill = () => {
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
        <div className="mt-10">
          <h3>
            <span className="text-xl mr-2">Greystone College</span>| Front End
            Development with CO-OP
          </h3>
          <p className="mb-5">in Vancouver, Canada/ - Present</p>
        </div>

        <div>
          <h3>Co., Ltd. IF BOX | Actor</h3>
          <p className="mb-16">in Tokyo, Japan | 03/2014 - 12/2023</p>
        </div>

        <div className="flex gap-3 md:gap-5 text-3xl md:text-5xl mb-3 justify-center">
          <SiHtml5 className=" hover:scale-110 transition duration-300" />
          <SiCss3 className=" hover:scale-110 transition duration-300" />
          <SiJavascript className=" hover:scale-110 transition duration-300" />
          <SiTypescript className=" hover:scale-110 transition duration-300" />
          <SiReact className=" hover:scale-110 transition duration-300" />
          <SiNextdotjs className=" hover:scale-110 transition duration-300" />
        </div>
        <div className="flex gap-3 md:gap-5 text-3xl md:text-5xl justify-center">
          <SiTailwindcss className=" hover:scale-110 transition duration-300" />
          <SiBootstrap className=" hover:scale-110 transition duration-300" />
          <SiShadcnui className=" hover:scale-110 transition duration-300" />
          <SiSupabase className=" hover:scale-110 transition duration-300" />
          <SiGit className=" hover:scale-110 transition duration-300" />
          <SiGithub className=" hover:scale-110 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
