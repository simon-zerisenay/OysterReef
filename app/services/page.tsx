import { PriceCard } from '@/components/PriceCard';
import { kMaxLength } from 'buffer';
import Image from 'next/image';
import React from 'react';

const ServicesPage = () => {
  return (
    <div className='flex flex-col'>
      <div className=' m-20 flex justify-center'>
        <h1 className='text-white'>Services</h1>
      </div>
      <div className='flex flex-col p-20 items-center font-light bg-white min-h-screen '>
        <div className='grid grid-cols-1  md:grid-cols-2 justify-items-center gap-10'>
          <PriceCard
            title='Moderate'
            price='200K'
            description='Set-up fee AED 200,000'
            description2='area = 45 sqm'
          />
          <PriceCard
            title='High'
            price='400K'
            description='Set-up fee AED 400,000'
            description2='area = 90 sqm'
          />
        </div>
        <h1 className='text-blue-900 text-4xl mt-20'>
          "Reviving Oceans, Building Reefs"
        </h1>
        <div className='flex flex-col my-20 gap-10'>
          <h1 className='text-blue-950 md:min-w-[500px]'>Project Benefits</h1>
          <Image
            src={'/benefit.png'}
            alt='benefit'
            width={kMaxLength}
            height={kMaxLength}
            className=' object-cover flex w-full h-full'
          />
        </div>
        <div className='flex flex-col my-20 gap-10'>
          <h1 className='text-blue-950 mt-20'>Gallery</h1>
          <Image
            src={'/fish.png'}
            alt='fish'
            width={kMaxLength}
            height={kMaxLength}
            className=' object-cover flex w-full h-full'
          />
        </div>
        <div className='flex flex-col my-20 gap-10'>
          <h1 className='text-blue-950 mt-20'>3D Designs</h1>
          <Image
            src={'/concrete.png'}
            alt='fish'
            width={kMaxLength}
            height={kMaxLength}
            className=' object-cover flex w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
