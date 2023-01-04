import React, { useContext, useEffect, useState } from "react";
import { getDecryptedVideoByToken } from "../../api/api";
import { Context } from "../../Context";
import { decryptFile } from "../../Crypto/Crypto";
import "./Decrypt.scss";
import VideoDecryptor from "./VideoDecryptor";
import VideoTokenList from "./VideoTokenList";

const Decrypt = ({ setActiveVideoDecrypt, UploadedVideo }) => {
  const { GlobalData } = useContext(Context);
  const [ActiveToken, setActiveToken] = useState("");
  const [downloadProgress, setDownloadProgress] = useState(null);

  useEffect(() => {
    if (UploadedVideo) setActiveToken("");
  }, [UploadedVideo]);

  useEffect(() => {
    if (ActiveToken !== "") {
      getDecryptedVideoByToken(ActiveToken, setDownloadProgress).then((res) => {
        if (res) {
          const decrypt = decryptFile(res, GlobalData.DecryptToken);
          if (decrypt) setActiveVideoDecrypt(decrypt);
        }
      });
    }

    return () => {};
  }, [ActiveToken, GlobalData.DecryptToken, setActiveVideoDecrypt]);

  if (ActiveToken === "")
    return <VideoTokenList setActiveToken={setActiveToken} />;
  return (
    <VideoDecryptor
      ActiveToken={ActiveToken}
      downloadProgress={downloadProgress}
    />
  );
};

export default Decrypt;
