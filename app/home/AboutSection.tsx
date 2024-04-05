import { kMaxLength } from 'buffer';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className='h-full bg-white p-20 flex flex-col items-center justify-center'>
      <div className='flex flex-col my-20 gap-10 md:flex-row'>
        <h1 className='text-blue-950 min-w-[400px]'>
          Why Are Coral Reefs Important?
        </h1>
        <p>
          Coral reefs are some of the most diverse ecosystems in the world.
          Coral polyps, the animals primarily responsible for building reefs,
          can take many forms: large reef building colonies, graceful flowing
          fans, and even small, solitary organisms. Thousands of species of
          corals have been discovered; some live in warm, shallow, tropical seas
          and others in the cold, dark depths of the ocean.Because of the
          diversity of life found in the habitats created by corals, reefs are
          often called the "rainforests of the sea." About 25% of the ocean's
          fish depend on healthy coral reefs. Fishes and other organisms
          shelter, find food, reproduce, and rear their young in the many nooks
          and crannies formed by corals.
        </p>
      </div>
      <Image
        src='/archreef1.jpg'
        alt='logo'
        height={kMaxLength - 100}
        width={kMaxLength}
        className='flex py-10'
      />
    </section>
  );
};

export default AboutSection;
