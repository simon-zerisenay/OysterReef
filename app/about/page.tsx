import React from 'react';

const AboutPage = () => {
  return (
    <div className='flex flex-col'>
      <div className=' my-20 flex justify-center'>
        <h1 className='text-white text-3xl'>About Us</h1>
      </div>
      <div className='flex flex-col  bg-white p-20'>
        <p className=''>
          We are a nature tech company dedicated to the restoration of degraded
          marine ecosystems. Our proprietary Reef Tiles, the world's first
          3D-printed from terracotta clay, have proven to be a game-changer in
          coral restoration efforts. With a coral survivorship rate of 95%,
          these tiles significantly outperform traditional methods. Such success
          has garnered Archireef recognition from organizations including the
          World Economic Forum, IUCN, and Geneva Inventions.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
