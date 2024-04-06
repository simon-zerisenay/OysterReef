'use client';

import { motion } from 'framer-motion';
import { HERO_TEXTS } from '@/constants';
import Link from 'next/link';
import { PiPlayCircleThin } from 'react-icons/pi';

const HeroSection = () => {
  return (
    <>
      <section className='bg-blue-500 h-screen text-white items-center w-full'>
        <video
          loop
          src='./ocean_bg.mp4'
          className='h-screen w-full z-[-1] object-cover'
          autoPlay
          muted
        />

        <div className='bg-blue-950 opacity-80 inset-0 absolute pt-20 p-10 flex justify-center items-center '>
          <div className='constrained-div flex flex-col w-full items-start'>
            <div className=' max-w-[900px] my-20 '>
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.8,
                }}
              >
                {HERO_TEXTS.main}
              </motion.h1>
              <motion.h2
                className='mb-4 text-lg font-light'
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.8,
                  delay: 0.4,
                }}
              >
                {HERO_TEXTS.subtitle}
              </motion.h2>
            </div>
            <div className='flex flex-col w-full items-center my-10'>
              <Link href='?video-modal=true'>
                <button
                  type='button'
                  className='flex flex-col font-extralight items-center opacity-60 hover:opacity-100 duration-100'
                >
                  <PiPlayCircleThin size={70} />
                  <p>Play Video</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
