import axios from "axios";

const _URL = "http://188.134.88.80";

const instanceIncrypt = (onUploadProgress = () => {}) => {
  return axios.create({
    baseURL: _URL + "/api/",
    headers: {
      "Content-Type": "application/json",
    },
    onUploadProgress: (progressEvent) => {
      onUploadProgress(progressEvent);
    },
  });
};

const instanceDecrypt = (onDownloadProgress = () => {}) => {
  return axios.create({
    baseURL: _URL + "/api/",
    headers: {
      "Content-Type": "application/json",
    },
    onDownloadProgress: (progressEvent) => {
      onDownloadProgress(progressEvent);
    },
  });
};

export const getDecryptedVideoByToken = async (token, onDownloadProgress) => {
  return instanceDecrypt(onDownloadProgress)
    .get(`https://${token}.ipfs.w3s.link/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const sendEncryptedData = async (str, onUploadProgress) => {
  return await instanceIncrypt(onUploadProgress)
    .post("FileStorage/UploadFileData", str)
    .then((res) => res.data);
};
