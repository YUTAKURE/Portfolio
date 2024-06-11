import React from 'react';

interface VideoPlayerProps {
  src: string;
  type: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, type }) => {
  return (
    <div>
      <video
        width="640"
        height="360"
        controls
        controlsList="nodownload"
        disablePictureInPicture
        playsInline
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
};

export default VideoPlayer;
