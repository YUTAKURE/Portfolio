import React from 'react';
import dynamic from 'next/dynamic';
import Slider from './Slider';
import { motion } from 'framer-motion';

const Works = () => {
  const DynamicVideoPlayer = dynamic(
    () => import('../components/VideoPlayer'),
    { ssr: false },
  );

  return (
    <div className="w-3/4 px-15 py-24 mx-auto text-center">
      <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-medium pb-3">WORKS</h1>

        <div className="">
          <div className="mb-16 before:content-[''] before:block before:w-full before:h-[1.2px] before:bg-gradient-to-r before:from-transparent before:via-slate-400 dark:before:via-yellow-400 before:to-transparent"></div>
        </div>

        <motion.div
          className="mb-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.6, delay: 0.5 }}
        >
          <Slider />
        </motion.div>

        <div className="md:flex md:justify-center md:gap-10">
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
        </div>
      </div>
    </div>
  );
};

export default Works;
