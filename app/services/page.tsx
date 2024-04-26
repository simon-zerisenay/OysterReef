import { PriceCard } from '@/components/PriceCard';
import { kMaxLength } from 'buffer';
import Image from 'next/image';
import React from 'react';
import { IoCheckmark } from 'react-icons/io5';
import data from '../priceData/data.json'

interface PriceCardData {
  title: string;
  price: string;
  description: string[];
}

const ServicesPage = () => {
  const features = [
    'Trimestral biodiversity report',
    'Monthly diversity report',
    'Access to Environmental data',
    'trimestral dive',
    'Monthly report',
    'real-time access',
    'reef named as per sponsor brand',
    'trimestral dive',
  ];
  return (
    <div className='flex flex-col'>
      <div className=' m-20 flex justify-center'>
        <h1 className='text-white'>Services</h1>
      </div>
      <div className='flex flex-col p-20 items-center font-light bg-white min-h-screen '>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'>
          {data.map((card: PriceCardData) => (
            <PriceCard
              key={card.title} 
              title={card.title}
              price={card.price}
              description={card.description}
            />
          ))}
          
        </div>
        <div className='w-full flex flex-col items-center mb-10'>
          <h1 className='text-blue-900  text-4xl mt-20 mb-10 '>Features</h1>
          <ul className='grid-cols-1 grid sm:grid-cols-2 items-center justify-center gap-2'>
            {features.map((feature, index) => (
              <li key={index} className='flex mx-10  gap-2 items-center'>
                <span>
                  <IoCheckmark />
                </span>
                <p className='text-xl font-medium '> {feature}</p>
              </li>
            ))}
          </ul>
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
