import { FOOTER_CONTACT_INFO, NAV_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flexCenter my-24 mx-20 text-white font-light'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image src='/logo.png' alt='logo' height={100} width={200} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            <FooterColumn title={'Links'}>
              <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                {NAV_LINKS.map((items) => (
                  <Link
                    href={items.href}
                    key={items.key}
                    className='hover:font-bold'
                  >
                    {items.label}
                  </Link>
                ))}{' '}
              </ul>
            </FooterColumn>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <p
                    key={link.label}
                    className='flex gap-4 md:flex-col lg:flex-row'
                  >
                    <p className='whitespace-nowrap'>{link.label}:</p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>
                      {link.value}
                    </p>
                  </p>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-white'>
                  {SOCIALS.links.map((link) => (
                    <Link href='/' key={link}>
                      <Image
                        src={link}
                        alt='socials'
                        width={24}
                        height={24}
                        style={{ color: 'white' }}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20' />
        <p className='regular-14 w-full text-center'>
          2024 Fujairah Reasearch Center | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className=' font-bold whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
