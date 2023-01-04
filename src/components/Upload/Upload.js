import React from "react";
import EncryptFile from "./EncryptFile";
import "./Upload.scss";

const Upload = ({ setUploadedVideo, UploadedVideo, setAllUpload }) => {
  const onFileHandler = (rawFile) => {
    setUploadedVideo(rawFile);
    setAllUpload(false);
  };

  return (
    <div className="upload-wrapper">
      <h1>Uplaod</h1>
      <input type="file" name="file" id="file" onChange={onFileHandler} />
      <EncryptFile UploadedVideo={UploadedVideo} setAllUpload={setAllUpload} />
    </div>
  );
};

export default Upload;
