import React from "react";
import "./Play.scss";
import lock from "../../icon/lock.png";

const OriginalVideo = ({ Video, AllUpload }) => {
  if (!Video) return null;
  return (
    <>
      <p>original</p>
      <div className="video-player">
        <video
          className="video-player"
          controls
          src={Video}
          autoPlay
          type="video/mp4"
        />
        {AllUpload && (
          <img className="lock-icon" src={lock} alt="ENCRYPTED FILE" />
        )}
      </div>
    </>
  );
};

export default OriginalVideo;
