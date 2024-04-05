import { ABOUT_US, PARTNERS_LOGOS } from '@/constants';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='flex flex-col '>
      <div className=' mt-20 flex justify-center'>
        <h1 className='text-white'>{ABOUT_US.title}</h1>
      </div>
      <div className='flex flex-col p-10 items-center font-light text-white sm:p-20'>
        <div className='constrained-div'>
          <p className=''>{ABOUT_US.description}</p>
        </div>
      </div>
      <div className='flex flex-col p-10 items-center font-light bg-white sm:p-20'>
        <div className='constrained-div'>
          <h1 className='text-blue-950 mb-10'>Our Partners</h1>
          <LogoGrid />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

const LogoGrid = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center'>
      {PARTNERS_LOGOS.map((item) => (
        <Image
          key={item.alt}
          src={item.src}
          alt={item.alt}
          className='p-5 border border-slate-300  md:p-10 hover:bg-blue-50'
          width={300}
          height={200}
        />
      ))}
    </div>
  );
};
