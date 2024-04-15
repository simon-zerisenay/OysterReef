'use client';
import React from 'react';

import { Spiral as Hamburger } from 'hamburger-react';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';

interface NavMobileProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = ({ isOpen, setOpen }: NavMobileProps) => {
  return (
    <div className='md:hidden'>
      <Hamburger color='white' toggled={isOpen} size={40} toggle={setOpen} />
      {isOpen && (
        <div className='fixed left-0 shadow-4xl right-0  p-5 pt-0 bg-blue-950 '>
          <ul className='h-screen gap-12 flex flex-col text-white justify-center items-center'>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className=' font-light opacity-65 text-3xl flex cursor-pointer py-1.5 transition-all hover:opacity-100 duration-200'
              >
                <button
                  onClick={() => {
                    setOpen((e) => !e);
                  }}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <Link href={'/contacts'}>
              <button
                onClick={() => {
                  setOpen((e) => !e);
                }}
                className='font-light flexCenter border border-white px-6 py-2 hover:bg-white  hover:text-black duration-200'
              >
                Contact
              </button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
