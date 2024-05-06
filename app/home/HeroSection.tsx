'use client';

import { motion } from 'framer-motion';
import { HERO_TEXTS } from '@/constants';
import Link from 'next/link';
import { PiPlayCircleThin } from 'react-icons/pi';

const HeroSection :React.FC = () => {
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
        

        {/* <iframe 
         style={{
        // position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        // maxWidth: '177.78vh', // 16:9 aspect ratio (100vh * 16 / 9)
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        zIndex: -1,
      }}
        className='h-screen w-screen z-[-1] object-cover'
        width="1560px"
        height="315px" 
        src="https://www.youtube.com/embed/Q1M_k0cpRYk?si=AKWLpz5QaQ2aAXcd&autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1" 
        title="YouTube video player" 
        // frameborder={0} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        // referrerpolicy="strict-origin-when-cross-origin" 
        // allowfullscreen
        ></iframe> */}

        <div className='bg-blue-950 bg-opacity-40 opacity-90 inset-0 absolute pt-20 p-10 flex justify-center items-center '>
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
