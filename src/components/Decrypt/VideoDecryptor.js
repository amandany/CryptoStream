import React from "react";
import './Decrypt.scss'
const VideoDecryptor = ({ ActiveToken, downloadProgress }) => {
  return (
    <div className="VideoDecryptor">
      <p>Active video ID: {ActiveToken}</p>
      <span className="bytes-loaded">bytes loaded: {downloadProgress?.loaded} </span>
    </div>
  );
};

export default VideoDecryptor;
