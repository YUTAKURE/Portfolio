import React from 'react';
import dynamic from 'next/dynamic';
import Slider from './Slider';

const Works = () => {
  const DynamicVideoPlayer = dynamic(
    () => import('../components/VideoPlayer'),
    { ssr: false },
  );

  return (
    <div className="w-3/4 px-15 py-24 mx-auto text-center">
      <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-medium pb-3 mb-16 border-b border-gray-500">
          WORKS
        </h1>

        <div className="mb-20 flex justify-center">
          <Slider />
        </div>

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
