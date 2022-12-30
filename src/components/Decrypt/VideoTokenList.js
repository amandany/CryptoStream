import React, { useContext } from "react";
import { Context } from "../../Context";

const VideoTokenList = ({ setActiveToken }) => {
  const { GlobalData } = useContext(Context);

  if (GlobalData.VideoTokens.length === 0) return null;

  const onVideoToken = (token) => setActiveToken(token);

  return (
    <div className="decrypt-wrapper">
      {GlobalData.VideoTokens.map((token, i) => {
        return (
          <div
            key={i}
            className="video-token"
            onClick={() => onVideoToken(token)}
          >
            {i + 1}. <span>{token}</span>
          </div>
        );
      })}
    </div>
  );
};

export default VideoTokenList;
