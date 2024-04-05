import React from 'react';

interface OutlineButtonProps {
  title: string;
  onClick: any;
}

const OutlineButton = ({ title, onClick }: OutlineButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='font-light flexCenter border border-white px-6 py-2 hover:bg-white  hover:text-black duration-200'
    >
      {title}
    </button>
  );
};

export default OutlineButton;
