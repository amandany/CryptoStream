import React, { useContext } from "react";
import { Context } from "../../Context";
import EncryptFile from "./EncryptFile";
import "./Upload.scss";

const Upload = ({ setUploadedVideo, UploadedVideo, setAllUpload }) => {
  const data = useContext(Context);
  console.log("DATA", data);
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

  return (
    <div className="upload-wrapper">
      <button onClick={fetchin}>FETCH</button>
      <h1>Uplaod</h1>
      <input type="file" name="file" id="file" onChange={onFileHandler} />
      <EncryptFile UploadedVideo={UploadedVideo} setAllUpload={setAllUpload} />
    </div>
  );
};

export default Upload;
