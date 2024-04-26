import React, { useState } from 'react';

interface PopupProps {
  title: string;
  price: string;
}

const Popup: React.FC<PopupProps> = ({ title, price }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickContactUs = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className='px-4 py-2 bg-blue-900 text-white hover:text-black hover:bg-blue-200' onClick={handleClickContactUs}>
        Contact Us
      </button>
      {isOpen && (
        <div className='popup fixed top-0 left-0 w-full h-full bg-slate-300 bg-opacity-50 flex justify-center items-center '>
          <div className='popup-content bg-white rounded-lg shadow-md p-8 flex flex-col'>
            <h2 className='text-xl font-medium mb-4 text-blue-900'>{title}</h2>
            <span className='text-4xl font-bold text-blue-900 mb-4'>AED {price}</span>
            <form className='flex flex-col space-y-4'>
              <input type='email' placeholder='Email' className='border border-slate-300 rounded-md px-3 py-2 focus:outline-blue-500' />
              <input type='text' placeholder='Name' className='border border-slate-300 rounded-md px-3 py-2 focus:outline-blue-500' />
              <textarea rows={5} placeholder='Message' className='border border-slate-300 rounded-md px-3 py-2 focus:outline-blue-500'></textarea>
              <div className='flex justify-between'>
                <button type='button' className='px-4 py-2 bg-slate-300 text-blue-900 hover:bg-slate-400' onClick={handleClosePopup}>
                  Close
                </button>
                <button type='submit' className='px-4 py-2 bg-blue-900 text-white hover:text-black hover:bg-blue-200'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
