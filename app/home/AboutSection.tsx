'use client';
import FourGrid from '@/components/FourGrid';
import {
  ARCREEF_FACTS,
  BEFORE_AFTER_OYSTEER,
  IMPORTANCE_CORAL_REEFS,
} from '@/constants';
import { kMaxLength } from 'buffer';
import Image from 'next/image';

import React from 'react';
import ReactPlayer from 'react-player';

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

        {BEFORE_AFTER_OYSTEER.map((item, index) => (
          <div
            className='flex flex-col border border-slate-200 p-10 my-20 gap-10 items-start lg:flex-row'
            key={index}
          >
            <div className='flex flex-col'>
              <h1 className='text-blue-950 text-3xl md:min-w-[500px]'>
                {item.title}
              </h1>
              <p>{item.description}</p>
            </div>
            <ReactPlayer
              url={item.videoUrl}
              controls={true}
              playing={false}
              width='100%'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
