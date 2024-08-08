'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Slider from './Slider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Works = () => {
  const DynamicVideoPlayer = dynamic(
    () => import('../components/VideoPlayer'),
    { ssr: false },
  );

  return (
    <div className="w-3/4 px-15 py-24 mx-auto text-center">
      <div className="mb-20">
        <h1 className="inline-block text-2xl md:text-3xl font-medium pb-3 mb-5 w-15 border-b border-gray-500">
          WORKS
        </h1>
        <motion.p
          className="w-5/6 mx-auto text-sm mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Project and Background
        </motion.p>

        {/* <div className="">
          <div className="mb-16 before:content-[''] before:block before:w-full before:h-[1.2px] before:bg-gradient-to-r before:from-transparent before:via-slate-400 dark:before:via-yellow-400 before:to-transparent"></div>
        </div> */}

        <motion.div
          className="mb-20 w-2/3 max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
            <figure>
              <Image
                className="w-3/5 md:w-2/5 mx-auto"
                src="/images/tenshin_gyoza.png"
                alt="card image"
                width={200}
                height={200}
                style={{
                  objectFit: 'cover',
                }}
              />
            </figure>

            <div className="p-6">
              <header className="mb-4">
                <h3 className="text-xl font-medium text-slate-700">
                  Online Shopping Site
                </h3>
              </header>
              <p className="text-sm">
                Supabase <span className="text-xs">✕</span> Stripe
              </p>
              <p className="text-sm mt-3">
                API data-fetching, Login function, Credit card payment
              </p>
            </div>

            <div className="flex justify-end p-6 pt-0">
              <button className="bg-primary-dark hover:scale-95 hover:brightness-90 inline-flex items-center justify-center w-4/5 mx-auto h-10 gap-2 px-5 text-sm font-medium tracking-wide text-primary-light transition duration-300 rounded focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:shadow-none">
                <Link
                  href="https://www.tenshin-gotemba.site/"
                  target="_blank"
                  className="w-full"
                >
                  Visit
                </Link>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-20 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <Slider />
        </motion.div>

        <motion.div
          className="md:flex md:justify-center md:gap-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-10">
            <DynamicVideoPlayer
              key="videoB"
              src="/videos/Yuta_videoB.mp4"
              type="video/mp4"
            />
          </div>
          <div>
            <DynamicVideoPlayer
              key="videoA"
              src="/videos/Yuta_videoA.mp4"
              type="video/mp4"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
