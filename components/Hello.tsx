'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../public/images/yuta.jpg';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Hello = () => {
  return (
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel
          quam quas suscipit, obcaecati illum voluptas est hic voluptatum
          dolore?
        </motion.p>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="md:flex gap-3 md:gap-5 md:text-5xl md:justify-start hidden">
            <FaInstagram className=" hover:scale-110 transition duration-300" />
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
          style={{
            objectFit: 'contain',
          }}
          placeholder="blur"
        />
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="md:hidden gap-5 mt-6 text-3xl flex justify-center">
          <FaInstagram className=" hover:scale-110 transition duration-300" />
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
