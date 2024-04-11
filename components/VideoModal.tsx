'use client';
import ReactPlayer from 'react-player';

import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

interface VideoModalProps {
  videoId: string;
}

const VideoModal = ({ videoId }: VideoModalProps) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get('video-modal');
  const pathname = usePathname();
  return (
    <>
      {modal && (
        <dialog className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center'>
          <ReactPlayer
            url={videoId}
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
