import React from 'react';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Hello from '@/components/Hello';

export default function Home() {
  return (
    <main className=" bg-secondary-light dark:bg-primary-dark">
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
  );
}
