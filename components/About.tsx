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

      <div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-xl mr-2 font-semibold">
              Greystone College
            </span>
            <span className="block md:hidden mt-1"></span>
            <span className="md:ml-8 text-slate-400">
              Front End Development with CO-OP
            </span>
          </div>
          <p className="mb-5 md:translate-x-14 text-slate-400">
            in Vancouver, Canada
          </p>

          <div>
            <span className=" text-xl mr-2 font-semibold md:ml-3">
              Hosei University
            </span>
            <span className="block md:hidden mt-1"></span>
            <span className="md:ml-14 text-slate-400">
              Information and Electrical Engineering
            </span>
          </div>
          <p className="mb-20 md:translate-x-8 text-slate-400">
            in Tokyo, Japan
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <div className="md:-ml-28">
                <span className="text-xl mr-2 font-semibold md:-ml-1">
                  Co., Ltd. DD　　
                </span>
                <span className="block md:hidden mt-1"></span>
                <TooltipTrigger asChild>
                  <span className="md:ml-14 text-slate-400 cursor-pointer">
                    Japanese Idol Group
                  </span>
                </TooltipTrigger>
              </div>
              <div>
                <p className="mb-5 md:translate-x-8 text-slate-400">
                  in Tokyo, Japan
                </p>
              </div>
              <TooltipContent sideOffset={20}>
                <p className="text-xs">
                  <Link href="/background" target="_blank" className="w-full">
                    Please check this LINK if you’re interested in my previous
                    job as an idol.
                  </Link>
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="md:-ml-20">
            <span className="text-xl mr-2 font-semibold md:-ml-14">
              Logic factory Co.,Ltd.
            </span>
            <span className="block md:hidden mt-1"></span>
            <span className="md:ml-2 text-slate-400">Network Engineer</span>
          </div>
          <p className="mb-20 md:translate-x-8 text-slate-400">
            in Tokyo, Japan
          </p>
        </motion.div>

        {/* <div>
          <h3>Co., Ltd. IF BOX | Actor</h3>
          <p className="mb-5">in Tokyo, Japan | 03/2014 - 12/2023</p>

          <h3>Logic factory Co.,Ltd. / Network Engineer</h3>
          <p className="mb-5">in Tokyo, Japan | 02/2012 - 02/2014</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
