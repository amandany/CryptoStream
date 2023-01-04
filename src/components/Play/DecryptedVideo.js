import React from "react";

const DecryptedVideo = ({ ActiveVideoDecrypt }) => {
  if (!ActiveVideoDecrypt) return null;

  let video = URL.createObjectURL(ActiveVideoDecrypt);

  return (
    <>
      <p>decrypt</p>
      <video
        className="video-player"
        controls
        src={video}
        autoPlay
        type="video/mp4"
      />
    </>
  );
};

export default DecryptedVideo;
