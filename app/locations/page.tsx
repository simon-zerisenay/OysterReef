import { ARCREEF_LOCATIONS } from '@/constants/archreef';
import { kMaxLength } from 'buffer';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';

const LocationsPage = () => {
  return (
    <div className='flex flex-col'>
      <div className=' m-20 flex justify-center'>
        <h1 className='text-white'>Artificial Reef locations</h1>
      </div>
      <div className='flex flex-col p-20 items-center font-light bg-white  '>
        <div className='constrained-div flex flex-col mb-20 gap-20  lg:flex-row'>
          {ARCREEF_LOCATIONS.map((item, index) => (
            <div
              className='mb-20 flex flex-col flex-1 border border-slate-200 p-10 items-stretch hover:shadow-md'
              key={index}
            >
              <div className='flex flex-col flex-2 '>
                <h2 className='font-bold text-xl my-2 text-blue-950'>
                  {item.title}
                </h2>

                <div className='flex items-center gap-2'>
                  <FaLocationDot />
                  <h3 className='my-2 font-medium'>{item.location}</h3>
                </div>
                <p>{item.description}</p>
              </div>

              <Image
                src={item.scrImage}
                alt='location'
                height={500}
                width={kMaxLength}
                className='w-full flex flex-1 max-w-[700px]'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
