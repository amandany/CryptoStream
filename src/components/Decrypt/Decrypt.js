import React, { useState } from "react";
import "./Decrypt.scss";
import VideoDecryptor from "./VideoDecryptor";
import VideoTokenList from "./VideoTokenList";

const Decrypt = () => {
  const [ActiveToken, setActiveToken] = useState("");
  if (ActiveToken === "")
    return <VideoTokenList setActiveToken={setActiveToken} />;
  return <VideoDecryptor ActiveToken={ActiveToken} />;
};

export default Decrypt;
