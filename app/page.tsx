import React from 'react';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Hello from '@/components/Hello';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="bg-secondary-light text-primary-dark dark:bg-primary-dark dark:text-secondary-light duration-500 ">
      <Header />

      <main>
        {/* TOP */}
        <section>
          <Hello />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* SKILL */}
        <section id="skill">
          <Skill />
        </section>

        {/* WORKS */}
        <section id="works">
          <Works />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
