import Avatar from '@/components/Avatar';
import { ABOUT_US, MISSION, PARTNERS_LOGOS } from '@/constants';
import { TEAM_MEMBERS } from '@/constants/archreef';
import { kMaxLength } from 'buffer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='flex flex-col '>
      <div className=' mt-20 flex justify-center'>
        <h1 className='text-white'>{ABOUT_US.title}</h1>
      </div>
      <div className='flex flex-col p-10 items-center font-light text-white sm:p-20'>
        <div className='constrained-div'>
          <p>{ABOUT_US.description}</p>
        </div>
      </div>
      <div className='flex flex-col p-10 items-center font-light bg-white sm:p-20'>
        <div className='constrained-div'>
          <h1 className='text-blue-950 mb-10'>Our Mission</h1>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center w-full gap-2'>
              <Image
                src={MISSION.src}
                alt='mission'
                width={kMaxLength}
                height={kMaxLength}
                className='max-w-[700px] flex w-full h-full'
              />
              <p className='text-sm max-w-[700px]'>{MISSION.image}</p>
            </div>
            <p>{MISSION.description}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-10  items-center font-light bg-white sm:p-20'>
        <div className='constrained-div w-full '>
          <h1 className='text-blue-950 mb-10'>Meet the Team</h1>
          <div className='grid grid-cols-1  xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {TEAM_MEMBERS.map((team, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center'
              >
                <Avatar src={team.img} alt={team.name} size={200} />
                <h2 className='text-xl text-blue-950 font-semibold  mt-2'>
                  {team.name}
                </h2>
                <p className='text-lg'>{team.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col p-10 items-center font-light bg-white sm:p-20'>
        <div className='constrained-div w-full'>
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
    <div className='grid grid-cols-2  lg:grid-cols-4 md:grid-cols-3 justify-items-center'>
      {PARTNERS_LOGOS.map((item) => (
        <Link href={item.url} key={item.alt}>
          <Image
            src={item.src}
            alt={item.alt}
            className='p-5 border border-slate-300 h-full object-contain  md:p-10 hover:border-black'
            width={300}
            height={200}
          />
        </Link>
      ))}
    </div>
  );
};
