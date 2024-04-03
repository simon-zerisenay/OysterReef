import { NAV_LINKS } from '@/constants';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className='flex justify-between w-full fixed z-50 p-5'>
      <Link href='/'>
        <Image src='/next.svg' alt='logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full gap-12 md:flex'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='text-white font-light opacity-65 flexCenter cursor-pointer pb-1.5 transition-all hover:opacity-100 duration-200'
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
