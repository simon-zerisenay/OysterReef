'use client';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import OutlineButton from './OutlineButton';

const NavBar = () => {
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight;
      const opacityValue = scrollPosition / maxScroll;
      console.log(opacityValue > 0);
      if (opacityValue > 0) {
        setOpacity(true);
      } else {
        setOpacity(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between w-full fixed z-50 p-5 opacity-90 `}
      style={{
        backgroundColor: `rgba(0, 10, 50, ${opacity ? '100' : '0'})`,
        transition: 'background-color 0.5s ease',
      }}
    >
      <Link href='/'>
        <Image src='/logo.png' alt='logo' height={70} width={150} />
      </Link>

      <ul className='hidden h-full gap-12 md:flex text-white items-center'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className=' font-light opacity-65 flexCenter cursor-pointer py-1.5 transition-all hover:opacity-100 duration-200'
          >
            {link.label}
          </Link>
        ))}
        <Link href='/contacts'>
          <OutlineButton onClick={() => {}} title='Contact' />
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
