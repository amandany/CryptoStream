import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  onUploadProgress: (progressEvent) => {
    console.log(progressEvent);
  },
});
const instanceBD = axios.create({
  baseURL: "https://",
  onUploadProgress: (progressEvent) => {
    console.log(progressEvent);
  },
});

export const getDecryptedVideoByToken = async (token) => {
  return axios
    .get(`https://${token}.ipfs.w3s.link/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const sendEncryptedData = async (str) => {
  return await instance.post("FileStorage/UploadFileData", { data: str });
};
