import axios from "axios";
import React from "react";
import EncryptFile from "./EncryptFile";
import "./Upload.scss";

const Upload = ({ setUploadedVideo, UploadedVideo, setAllUpload }) => {
  const onFileHandler = (rawFile) => {
    setUploadedVideo(rawFile);
    setAllUpload(false);
  };

  const fetchin = async () => {
    await fetch(
      "https://bafkreid73m36otrtzszutnfgkhsanna3iv2nelrx3dj36cktvoxhtm3ktm.ipfs.w3s.link/"
    )
      .then((res) => {
        return res.text();
      })
      .then((res) => console.log(res));
  };
  const instance = axios.create({
    baseURL: "https://",
    onUploadProgress: (progressEvent) => {
      console.log(progressEvent);
    },
  });
  const sendVideo = async () => {
    instance
      .get(
        "bafkreid73m36otrtzszutnfgkhsanna3iv2nelrx3dj36cktvoxhtm3ktm.ipfs.w3s.link"
      )
      .then(function (res) {
        // handle success
        return res.text();
      })
      .then((res) => console.log("RESULT", res));
  };

  return (
    <div className="upload-wrapper">
      <button onClick={fetchin}>FETCH</button>
      <br />
      <button>SEND</button>
      <h1>Uplaod</h1>
      <input type="file" name="file" id="file" onChange={onFileHandler} />
      <EncryptFile UploadedVideo={UploadedVideo} setAllUpload={setAllUpload} />
    </div>
  );
};

export default Upload;
