import FourGrid from '@/components/FourGrid';
import { ARCREEF_FACTS, IMPORTANCE_CORAL_REEFS } from '@/constants';
import { kMaxLength } from 'buffer';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className='h-full bg-white p-10 flex flex-col items-center justify-center'>
      <div className='constrained-div'>
        <div className='flex flex-col my-20 gap-10 lg:flex-row'>
          <h1 className='text-blue-950 md:min-w-[500px]'>
            {IMPORTANCE_CORAL_REEFS.title}
          </h1>
          <p>{IMPORTANCE_CORAL_REEFS.description}</p>
        </div>
        <h1 className='text-blue-950 md:min-w-[400px] mt-40 mb-10'>
          Coral Reef Facts
        </h1>
        <FourGrid data={ARCREEF_FACTS} />
        <Image
          src='/archreef1.jpg'
          alt='logo'
          height={kMaxLength - 100}
          width={kMaxLength}
          className='flex py-10'
        />
      </div>
    </section>
  );
};

export default AboutSection;
