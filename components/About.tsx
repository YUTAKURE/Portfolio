import React from 'react';
import Link from 'next/link';
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa6';

const About = () => {
  return (
    <div className="w-3/4 px-15 py-24 mx-auto text-center">
      <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-medium pb-3 mb-5 w-15 border-b border-gray-500">
          ABOUT
        </h1>
        <p className="w-5/6 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet
          aliquid ullam inventore temporibus facilis quidem consectetur
          praesentium ratione cupiditate distinctio, enim explicabo nulla id
          tempore! Facere, quia! Excepturi, fugit!
        </p>
      </div>

      <div>
        <div className="mt-10">
          <h3>
            <span className="text-xl mr-2">Greystone College</span>| Front End
            Development with CO-OP
          </h3>
          <p className="mb-5">in Vancouver, Canada/ - Present</p>

          <h3>
            <span className=" text-xl mr-2">Hosei University</span>| Information
            and Electrical Engineering
          </h3>
          <p className="mb-20">in Tokyo, Japan</p>
        </div>

        <div>
          <h3>Co., Ltd. IF BOX | Actor</h3>
          <p className="mb-5">in Tokyo, Japan | 03/2014 - 12/2023</p>

          <h3>Logic factory Co.,Ltd. / Network Engineer</h3>
          <p className="mb-5">in Tokyo, Japan | 02/2012 - 02/2014</p>
        </div>
      </div>
    </div>
  );
};

export default About;
