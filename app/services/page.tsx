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
            description2='area = 45 sqm'
          />
        </div>
        <h1 className='text-blue-900 text-6xl mt-20'>
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
          <Image
            src={'/fish.png'}
            alt='fish'
            width={kMaxLength}
            height={kMaxLength}
            className=' object-cover flex w-full h-full'
          />
        </div>
        <div className='flex flex-col my-20 gap-10'>
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

interface PriceCardProps {
  title: string;
  description: string;
  description2: string;
  price: string;
}

export const PriceCard = ({
  title,
  description,
  description2,
  price,
}: PriceCardProps) => {
  return (
    <div className='w-[300px] border border-slate-300 flex flex-col shadow-md p-10 hover:border-blue-900 duration-100'>
      <h2 className='text-xl font-medium '>{title}</h2>
      <p className='mb-4'>area of development</p>
      <div className='flex items-center mb-4'>
        <span className='text-4xl font-bold mr-2'>AED</span>
        <span className='text-4xl font-bold text-blue-900'>{price}</span>
      </div>

      <ul className='list-none space-y-2 mb-5'>
        <li className='flex items-center'>
          <span>- {description}</span>
        </li>
        <li className='flex items-center'>
          <span>- {description2}</span>
        </li>
        ;
      </ul>
      <div className=' w-full flex justify-center mt-10 '>
        <button className='px-4 py-2 bg-blue-900 text-white hover:text-black hover:bg-blue-200'>
          Buy Plan
        </button>
      </div>
    </div>
  );
};
