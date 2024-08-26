'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../public/images/yuta.jpg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { GrDocumentPdf } from 'react-icons/gr';

const Hello = () => {
  return (
    <div className="flex container mx-auto py-10 flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 lg:pr-12 md:pr-8 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, translateX: -40, scale: 0.95 }}
          animate={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
          className="text-3xl sm:text-5xl font-medium mb-4 leading-snug sm:leading-snug"
        >
          Hello, <br className="hidden md:inline-block" />
          <span className=" text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 via-pink-500 to-yellow-300 ">
            I&apos;m YUTA <br />
          </span>
          Web Developer
        </motion.h1>
        <motion.p
          className="mb-8 leading-relaxed md:text-base text-sm"
          initial={{ opacity: 0, translateX: -40, scale: 0.95 }}
          animate={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Motivated aspiring Front-End Developer with a strong foundation in
          HTML/CSS, JavaScript and modern frameworks such as React, Next.js and
          Tailwind CSS. Strong problem-solving skills and eager to learn new
          technologies.
        </motion.p>

        <motion.span
          initial={{ opacity: 0, translateX: -40, scale: 0.95 }}
          animate={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <div className="md:flex gap-3 md:gap-5 md:text-5xl md:justify-start hidden">
            <Link href="/resume" target="_blank">
              <GrDocumentPdf className=" hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link href="https://github.com/YUTAKURE" target="_blank">
              <FaGithub className=" hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yuta-kurebayashi-b440352b2/"
              target="_blank"
            >
              <FaLinkedin className=" hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </motion.span>
      </div>

      <motion.div
        className="md:w-1/2 lg:max-w-lg w-3/4"
        initial={{ opacity: 0, translateX: -40, scale: 0.95 }}
        animate={{ opacity: 1, translateX: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <Image
          src={img1}
          alt="YUTA"
          width={590}
          height={729}
          style={{
            objectFit: 'contain',
          }}
          placeholder="blur"
        />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: 'easeOut', duration: 0.6, delay: 0.3 }}
      >
        <div className="md:hidden gap-5 mt-6 text-3xl flex justify-center">
          <Link href="/resume" target="_blank">
            <GrDocumentPdf className=" hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link href="https://github.com/YUTAKURE" target="_blank">
            <FaGithub className=" hover:scale-110 transition duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yuta-kurebayashi-b440352b2/"
            target="_blank"
          >
            <FaLinkedin className=" hover:scale-110 transition duration-300" />
          </Link>
        </div>
      </motion.span>
    </div>
  );
};

export default Hello;
