import React from 'react';
import Slider from './Slider';

const Works = () => {
  return (
    <div className="w-3/4 px-15 py-24 mx-auto text-center">
      <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-medium pb-3 mb-16 border-b border-gray-500">
          WORKS
        </h1>
        <div className="flex justify-center">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Works;
