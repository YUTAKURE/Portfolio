'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Slider from './Slider';
import { motion } from 'framer-motion';

const BackGround = () => {
  const DynamicVideoPlayer = dynamic(
    () => import('../components/VideoPlayer'),
    { ssr: false },
  );

  return (
    <div className="w-3/4 m-auto">
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
  );
};

export default BackGround;
