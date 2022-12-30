import React from "react";

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

export default Done;
