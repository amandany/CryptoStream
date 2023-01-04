import React, { useEffect, useState } from "react";
import Done from "./Done";
import EncryptInProgress from "./EncryptInProgress";
import UploadInProgress from "./UploadInProgress";

// EncryptStatus
// 0 Not started
// 1 Encrypt in progress
// 2 Upload to the server
// 3 Done

const EncryptFile = ({ UploadedVideo, setAllUpload }) => {
  const [EncryptStatus, setEncryptStatus] = useState(0);
  const [ProgressData, setProgressData] = useState(null);

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
        setProgressData={setProgressData}
      />
      <UploadInProgress
        EncryptStatus={EncryptStatus}
        ProgressData={ProgressData}
      />
      <Done EncryptStatus={EncryptStatus} />
    </>
  );
};

export default EncryptFile;
