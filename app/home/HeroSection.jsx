import { HERO_TEXTS } from '@/constants';
import Link from 'next/link';
import { PiPlayCircleThin } from 'react-icons/pi';

const HeroSection = () => {
  return (
    <>
      <section className='bg-blue-500 screen text-white'>
        <video
          loop
          src='./ocean_bg.mp4'
          className='h-screen w-full z-[-1] object-cover'
          autoPlay
          muted
        />
        <div className='bg-blue-950 opacity-80 inset-0 absolute pt-20 p-10 justify-center flex flex-col w-full'>
          <div className=' max-w-[900px] my-20'>
            <h1>{HERO_TEXTS.main}</h1>
            <h2 className='mb-4 text-lg font-light'>{HERO_TEXTS.subtitle}</h2>
          </div>
          <div className='flex flex-col items-center my-10'>
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
      </section>
    </>
  );
};

export default HeroSection;
