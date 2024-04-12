'use client';
import ReactPlayer from 'react-player';

import Link from 'next/link';
import { BEFORE_AFTER_OYSTEER } from '@/constants';
import { useSearchParams } from 'next/navigation';

const VideoModal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get('video-modal');

  return (
    <>
      {modal && (
        <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
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
