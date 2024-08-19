import React from 'react';
import BackGround from '@/components/BackGround';
import Header from '@/components/Header';

const BackGroundPage = () => {
  return (
    <div className="bg-secondary-light text-primary-dark dark:bg-primary-dark dark:text-secondary-light duration-500">
      <Header />

      <div className="mt-20 mb-12 text-center">
        <h1 className="inline-block text-2xl md:text-3xl font-medium pb-3 mb-5 w-15 border-b border-gray-500">
          BACKGROUND
        </h1>
      </div>
      <BackGround />
    </div>
  );
};

export default BackGroundPage;
