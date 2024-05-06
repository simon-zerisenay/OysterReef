'use client';
import { IoCheckmark } from 'react-icons/io5';
import Popup from './popup';

interface PriceCardProps {
  title: string;
  description: string[];
  price: string;
}

export const PriceCard = ({
  title,
  description,

  price,
}: PriceCardProps) => {
  return (
    <div className='w-[300px] border border-slate-300 flex flex-col justify-between shadow-md p-10 hover:border-blue-900 duration-100'>
      

      <div className=''>
        <h2 className='text-xl font-medium mb-4 '>{title}</h2>
        <div className='flex items-center mb-4'><span className='text-4xl font-bold mr-2'>AED</span>
        <span className='text-4xl font-bold text-blue-900'>{price}</span></div>
        
      </div>

      <ul className='list-none space-y-2 mb-5'>
        {description.map((item, index) => (
          <li key={index} className='flex items-center gap-2'>
            <span>
              <IoCheckmark />
            </span>
            <span> {item}</span>
          </li>
        ))}
      </ul>
      <div className=' w-full  flex justify-center mt-10 '>
        <Popup
      title={title} 
      price={price}
      ></Popup>
      </div>
      
    </div>
  );
};
