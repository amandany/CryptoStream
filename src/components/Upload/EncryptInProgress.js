import React, { useCallback, useContext, useEffect } from "react";
import CryptoJS from "crypto-js";
import Loader from "../Loader/Loader";
import { Context } from "../../Context";
import { sendEncryptedData } from "../../api/api";

const EncryptInProgress = ({
  EncryptStatus,
  setEncryptStatus,
  UploadedVideo,
}) => {
  const { GlobalData } = useContext(Context);
  
  const sendVideo = useCallback(
    async (str) => {
      sendEncryptedData(str)
        .then((res) => {
          console.log(res);
          setEncryptStatus((prev) => prev + 1);
        })
        .catch((err) => {
          console.log("err", err);
          setEncryptStatus((prev) => prev + 1);
        });
    },
    [setEncryptStatus]
  );

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
          let encryptedData = CryptoJS.AES.encrypt(
            wordArray,
            GlobalData.DecryptToken
          );
          let encryptedDataStr = encryptedData.toString();
          setEncryptStatus((prev) => prev + 1);
          console.log(encryptedDataStr);
          sendVideo(encryptedDataStr);
        };
      }
    };
    start();

    return () => {};
  }, [EncryptStatus, GlobalData.DecryptToken, UploadedVideo, sendVideo, setEncryptStatus]);

  if (EncryptStatus !== 1) return null;
  return (
    <div className="encrypt-in-progress">
      ENCRYPTING <Loader />
    </div>
  );
};

export default EncryptInProgress;
