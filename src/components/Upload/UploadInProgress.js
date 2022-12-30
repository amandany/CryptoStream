import React from "react";
import Loader from "../Loader/Loader";

const UploadInProgress = ({ EncryptStatus, setEncryptStatus }) => {
  // useEffect(() => {
  //   let timer = null;
  //   if (EncryptStatus === 2)
  //     timer = setTimeout(() => {
  //       setEncryptStatus((prev) => prev + 1);
  //     }, 2000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [EncryptStatus, setEncryptStatus]);

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

export default UploadInProgress;
