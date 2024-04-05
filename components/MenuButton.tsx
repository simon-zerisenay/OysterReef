'use client';
import React, { useState } from 'react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className='flex flex-col justify-center items-center'
    ></button>
  );
};

export default MenuButton;
