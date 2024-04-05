import React from 'react';

const FourGrid = ({ data }: any) => {
  return (
    <div className='flex flex-col w-full justify-between items-stretch gap-20'>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <GridItem title={data[0].title} description={data[0].description} />
        <GridItem title={data[1].title} description={data[1].description} />
      </div>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <GridItem title={data[2].title} description={data[2].description} />
        <GridItem title={data[3].title} description={data[3].description} />
      </div>
    </div>
  );
};

export default FourGrid;
interface GridItemProps {
  title: string;
  description: string;
}
export function GridItem({ title, description }: GridItemProps) {
  return (
    <div className='flex flex-col w-full justify-start items-stretch gap-5'>
      <h2 className=' text-2xl font-bold'> {title}</h2>
      <p className='text-lg'>{description}</p>
    </div>
  );
}
