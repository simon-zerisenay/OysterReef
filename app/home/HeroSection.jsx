import { HERO_TEXTS } from '@/constants';

const HeroSection = () => {
  return (
    <section className='bg-blue-500 h-screen'>
      <video
        loop
        src='./ocean_bg.mp4'
        className='h-screen w-full z-[-1] object-cover'
        autoPlay
        muted
      />
      <div className='bg-blue-950 opacity-80 inset-0 absolute pt-20 p-10 justify-center flex flex-col'>
        <h1>{HERO_TEXTS.main}</h1>
        <h2 className='mb-4 text-white text-lg font-light'>
          A nature tech company dedicated to the restoration of degraded marine
          ecosystems.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
