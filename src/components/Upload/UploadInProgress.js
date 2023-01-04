import React from "react";
import Loader from "../Loader/Loader";

const UploadInProgress = ({ EncryptStatus, ProgressData }) => {
  if (EncryptStatus !== 2) return null;

  return (
    <div className="upload-in-progress">
      <p>
        ENCRYPTED <span className="symbol">✅</span>
      </p>
      <div className="upload-status">
        <p>SENDING</p>
        <Loader />
        {ProgressData && (
          <>
            <progress id="file" min="0" max="1" value={ProgressData.progress} />
            <p>{(ProgressData.progress.toFixed(2) * 100).toFixed(2)}%</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadInProgress;
