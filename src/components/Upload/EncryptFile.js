import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import Loader from "../Loader/Loader";
import axios from "axios";

// EncryptStatus
// 0 Not started
// 1 Encrypt in progress
// 2 Upload to the server
// 3 Done

const EncryptFile = ({ UploadedVideo, setAllUpload }) => {
  const [EncryptStatus, setEncryptStatus] = useState(0);

  useEffect(() => {
    setEncryptStatus(0);

    return () => {};
  }, [UploadedVideo]);

  useEffect(() => {
    if (EncryptStatus === 3) setAllUpload(true);
    return () => {
      setAllUpload(false);
    };
  }, [EncryptStatus, setAllUpload]);

  const onEncryptHandler = () => {
    if (EncryptStatus === 0) {
      setEncryptStatus(1);
    }
  };

  if (!UploadedVideo) return null;

  return (
    <>
      <button
        className={`encrypt-btn ${
          EncryptStatus !== 0 ? "encrypt-btn-disable" : ""
        }`}
        onClick={onEncryptHandler}
      >
        ENCRYPT FILE AND SEND
      </button>
      <EncryptInProgress
        EncryptStatus={EncryptStatus}
        setEncryptStatus={setEncryptStatus}
        UploadedVideo={UploadedVideo}
      />
      <UploadInProgress
        EncryptStatus={EncryptStatus}
        setEncryptStatus={setEncryptStatus}
      />
      <Done EncryptStatus={EncryptStatus} />
    </>
  );
};

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  onUploadProgress: (progressEvent) => {
    console.log(progressEvent);
  },
});
const sendVideo = async (str) => {
  instance
    .post("FileStorage/UploadFileData", { data: str })
    .then(function (res) {
        console.log(res);
      // handle success
    //   return res.text();
    })
    // .then((res) => console.log("RESULT", res));
};

const EncryptInProgress = ({
  EncryptStatus,
  setEncryptStatus,
  UploadedVideo,
}) => {
  useEffect(() => {
    const start = async () => {
      if (EncryptStatus === 1 && UploadedVideo) {
        let file = UploadedVideo.target.files[0];
        let reader = new FileReader();
        reader.onerror = function () {
          console.log(reader.error);
        };
        reader.readAsArrayBuffer(file);
        reader.onload = async function () {
          let ArrayBuffer = reader.result;
          let wordArray = CryptoJS.lib.WordArray.create(ArrayBuffer);
          let encryptedData = CryptoJS.AES.encrypt(wordArray, "aaa");
          let encryptedDataStr = encryptedData.toString();
          console.log(encryptedDataStr);
          sendVideo(encryptedDataStr)
        };
      }
    };
    start();

    return () => {};
  }, [EncryptStatus, UploadedVideo, setEncryptStatus]);

  if (EncryptStatus !== 1) return null;
  return (
    <div className="encrypt-in-progress">
      ENCRYPTING <Loader />
    </div>
  );
};

const UploadInProgress = ({ EncryptStatus, setEncryptStatus }) => {
  useEffect(() => {
    let timer = null;
    if (EncryptStatus === 2)
      timer = setTimeout(() => {
        setEncryptStatus((prev) => prev + 1);
      }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [EncryptStatus, setEncryptStatus]);

  if (EncryptStatus !== 2) return null;

  return (
    <div className="upload-in-progress">
      <p>
        ENCRYPTED <span className="symbol">✅</span>
      </p>
      <div className="upload-status">
        SENDING <Loader />
      </div>
    </div>
  );
};

const Done = ({ EncryptStatus }) => {
  if (EncryptStatus !== 3) return null;

  return (
    <div className="submit-done">
      <p>
        ENCRYPTED <span className="symbol">✅</span>
      </p>
      <p>
        SENT <span className="symbol">✅</span>
      </p>
    </div>
  );
};

export default EncryptFile;
