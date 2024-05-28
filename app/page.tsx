'use client';

import Image from 'next/image';
import Link from 'next/link';
import img1 from '../public/images/yuta.jpg';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import About from '@/components/About';
import Skill from '@/components/Skill';

export default function Home() {
  return (
    <main className=" bg-secondary-light dark:bg-primary-dark">
      {/* TOP */}
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

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SKILL */}
      <section id="skill">
        <Skill />
      </section>

      <section id="works">
        <div className="w-3/4 px-15 py-24 mx-auto text-center">
          <div className="mb-20">
            <h1 className="text-2xl md:text-3xl font-medium pb-3 mb-5 w-15 border-b border-gray-500">
              WORKS
            </h1>
            <p className="w-5/6 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div></div>
        </div>
      </section>

      <section></section>
    </main>
  );
}
