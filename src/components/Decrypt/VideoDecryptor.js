import React, { useContext, useEffect } from "react";
import { getDecryptedVideoByToken } from "../../api/api";
import { Context } from "../../Context";
import { decryptFile } from "../../Crypto/Crypto";

const VideoDecryptor = ({ ActiveToken }) => {
  const { GlobalData } = useContext(Context);

  useEffect(() => {
    if (ActiveToken !== "") {
      getDecryptedVideoByToken(ActiveToken).then((res) => {
        console.log("DecryptedVideoByToken", res);
        if (res) {
          const decrypt = decryptFile(res, GlobalData.DecryptToken);
          console.log(decrypt);
        }
      });
    }

    return () => {};
  }, [ActiveToken, GlobalData.DecryptToken]);

  return <div>VideoDecryptor</div>;
};

export default VideoDecryptor;
