'use client';

import Image from 'next/image';
import img1 from '../public/images/IMG_6190.jpeg';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
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
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex container mx-auto py-10 flex-col md:flex-row items-center justify-center">
          <motion.div
            className="md:w-1/2 lg:pr-12 md:pr-8 text-center md:text-left"
            initial={{ opacity: 0, translateX: -40, scale: 0.95 }}
            animate={{ opacity: 1, translateX: 0, scale: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-6xl font-medium mb-4 leading-snug sm:leading-snug">
              Hello, <br className="hidden md:inline-block" />
              <span className=" text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 via-pink-500 to-yellow-300 ">
                I&apos;m YUTA <br />
              </span>
              Web Developer
            </h1>
            <motion.p
              className="mb-8 leading-relaxed"
              initial={{ opacity: 0, translateX: -40, scale: 0.95 }}
              animate={{ opacity: 1, translateX: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              vel quam quas suscipit, obcaecati illum voluptas est hic
              voluptatum dolore?
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Button
                variant="outline"
                className="mb-5 duration-300 bg-gradient-to-br from-blue-400 via-pink-500 to-yellow-300 "
              >
                Contact
              </Button>
            </motion.span>
          </motion.div>
          <motion.div
            className="md:w-1/2 lg:max-w-lg w-3/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image
              src={img1}
              alt="YUTA"
              width={590}
              height={729}
              objectFit="contain"
              placeholder="blur"
            />
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="flex container mx-auto py-10 flex-col md:flex-row items-center justify-center"
      >
        <div>
          <div>aaaaa</div>
          <div className=" flex gap-3 md:gap-5 text-2xl md:text-5xl">
            <FaXTwitter className=" hover:scale-110 duration-300" />
            <FaInstagram className=" hover:scale-110 duration-300" />
            <FaGithub className=" hover:scale-110 duration-300" />
            <FaLinkedin className=" hover:scale-110 duration-300" />
          </div>
        </div>
      </section>

      <section
        id="skill"
        className="flex container mx-auto py-10 flex-col md:flex-row items-center justify-center h-screen"
      >
        <div>
          <div>bbbbb</div>
          <div className=" flex gap-3 md:gap-5 text-2xl md:text-5xl mb-3">
            <SiHtml5 className=" hover:scale-110 duration-300" />
            <SiCss3 className=" hover:scale-110 duration-300" />
            <SiJavascript className=" hover:scale-110 duration-300" />
            <SiTypescript className=" hover:scale-110 duration-300" />
            <SiReact className=" hover:scale-110 duration-300" />
            <SiNextdotjs className=" hover:scale-110 duration-300" />
          </div>
          <div className=" flex gap-3 md:gap-5 text-2xl md:text-5xl">
            <SiTailwindcss className=" hover:scale-110 duration-300" />
            <SiBootstrap className=" hover:scale-110 duration-300" />
            <SiShadcnui className=" hover:scale-110 duration-300" />
            <SiSupabase className=" hover:scale-110 duration-300" />
            <SiGit className=" hover:scale-110 duration-300" />
            <SiGithub className=" hover:scale-110 duration-300" />
          </div>
        </div>
      </section>
    </main>
  );
}
