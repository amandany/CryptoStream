import React, { useEffect, useState } from "react";
import OriginalVideo from "./OriginalVideo";
import "./Play.scss";

const Play = ({ UploadedVideo, AllUpload }) => {
  const [Video, setVideo] = useState(null);

  useEffect(() => {
    if (UploadedVideo) {
      let file = UploadedVideo.target.files[0];
      let link = URL.createObjectURL(file);

      setVideo(link);
    }
    return () => {
      setVideo(null);
    };
  }, [UploadedVideo]);

  return (
    <div className="play-wrapper">
      <h1>Play</h1>
      <OriginalVideo Video={Video} AllUpload={AllUpload} />
    </div>
  );
};

export default Play;
