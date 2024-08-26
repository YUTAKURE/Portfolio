'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const About = () => {
  return (
    <div className="w-3/4 px-15 py-24 mx-auto text-center">
      <div>
        <h1 className="inline-block text-2xl md:text-3xl font-medium pb-3 mb-5 w-15 border-b border-gray-500">
          ABOUT
        </h1>
        <motion.p
          className="w-5/6 mx-auto text-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Education and Experience
        </motion.p>
      </div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <fieldset className="max-w-2xl m-auto opacity-60 border border-solid border-gray-400 rounded-lg pb-12 md:pb-16 ">
          <legend className="md:mb-16 mb-9 text-sm">
            <span className="mx-4">Education</span>
          </legend>

          <div className="w-11/12 m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 md:gap-7 md:text-start">
              <div className="md:text-end md:pr-3">
                <span className="md:text-xl text-lg font-semibold">
                  Greystone College
                </span>
              </div>
              <div className="md:mt-0 -mt-4 md:text-base text-sm">
                <p className="md:ml-2 text-slate-600 dark:text-slate-400 md:block inline">
                  Front End Development
                </p>
                <span> </span>
                <p className="md:ml-2 text-slate-600 dark:text-slate-400 md:block inline">
                  with CO-OP
                </p>
                <p className="md:ml-2 text-slate-600 dark:text-slate-400">
                  in Vancouver, Canada
                </p>
              </div>
              <div className="md:mt-0 mt-5 md:text-end md:pr-3">
                <span className="md:text-xl text-lg font-semibold">
                  Hosei University
                </span>
              </div>
              <div className="md:mt-0 mt-1 md:text-base text-sm">
                <p className="md:ml-2 text-slate-600 dark:text-slate-400 md:block inline">
                  Information and
                </p>
                <span> </span>
                <p className="md:ml-2 text-slate-600 dark:text-slate-400 md:block inline">
                  Electrical Engineering
                </p>
                <p className="md:ml-2 text-slate-600 dark:text-slate-400">
                  in Tokyo, Japan
                </p>
              </div>
            </div>
          </div>
        </fieldset>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <fieldset className="max-w-2xl m-auto opacity-60 border border-solid border-gray-400 rounded-lg pb-12 md:pb-16 ">
          <legend className="md:mb-14 mb-9 text-sm">
            <span className="mx-4">Experience</span>
          </legend>

          <div className="w-4/5 m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 md:gap-7 md:text-start">
              <div className="md:text-end md:pr-3">
                <p className="md:text-xl text-lg font-semibold">Co., Ltd. DD</p>
              </div>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="md:mt-0 -mt-5 md:text-base text-sm">
                      <p className="md:ml-2 text-slate-600 dark:text-slate-400">
                        Japanese Idol Group
                      </p>
                      <p className="md:ml-2 text-slate-600 dark:text-slate-400">
                        in Tokyo, Japan
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={20}>
                    <p className="text-xs">
                      <Link
                        href="/background"
                        target="_blank"
                        className="w-full"
                      >
                        Please check this LINK if you’re interested in my
                        previous job as an idol.
                      </Link>
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="md:mt-0 mt-5 md:text-end md:pr-3">
                <span className="md:text-xl text-lg font-semibold">
                  Logic factory Co.,Ltd.
                </span>
              </div>
              <div className="md:mt-0 mt-1 md:text-base text-sm">
                <p className="md:ml-2 text-slate-600 dark:text-slate-400">
                  Network Engineer
                </p>
                <p className="md:ml-2 text-slate-600 dark:text-slate-400">
                  in Tokyo, Japan
                </p>
              </div>
            </div>
          </div>
        </fieldset>
      </motion.div>
    </div>
  );
};

export default About;
