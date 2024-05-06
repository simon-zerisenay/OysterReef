'use client';
import ReactPlayer from 'react-player';

import Link from 'next/link';
import { BEFORE_AFTER_OYSTEER } from '@/constants';
import { useSearchParams } from 'next/navigation';
import { IoClose } from "react-icons/io5";


const VideoModal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get('video-modal');

function handleClose(){
  window.location.href ='/'
}
  return (
    <>
      {modal && (
        <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
          <IoClose className='absolute top-10 text-white text-5xl hover:scale-110 transition-all duration-300 ease-in-out' onClick={handleClose}/>
          <ReactPlayer
            url={BEFORE_AFTER_OYSTEER[1].videoUrl}
            controls={true}
            playing={false}
            width='70%'
          />
        </dialog>
      )}
    </>
  );
};
export default VideoModal;
