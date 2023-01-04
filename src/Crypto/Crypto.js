import CryptoJS from "crypto-js";

export const convertWordArrayToUint8Array = (wordArray) => {
  var arrayOfWords = wordArray.hasOwnProperty("words") ? wordArray.words : [];
  var length = wordArray.hasOwnProperty("sigBytes")
    ? wordArray.sigBytes
    : arrayOfWords.length * 4;
  var uInt8Array = new Uint8Array(length),
    index = 0,
    word,
    i;
  for (i = 0; i < length; i++) {
    word = arrayOfWords[i];
    uInt8Array[index++] = word >> 24;
    uInt8Array[index++] = (word >> 16) & 0xff;
    uInt8Array[index++] = (word >> 8) & 0xff;
    uInt8Array[index++] = word & 0xff;
  }
  return uInt8Array;
};

/**
 * Кодирует файл
 * @param {*} RawFile
 * @returns encryptedDataStr
 */
export const encryptFile = async (RawFile) => {
  let file = RawFile.target.files[0];
  let reader = new FileReader();
  reader.onerror = function () {
    console.log(reader.error);
  };
  reader.readAsArrayBuffer(file);
  reader.onload = async function () {
    let ArrayBuffer = reader.result;
    let wordArray = CryptoJS.lib.WordArray.create(ArrayBuffer);
    let encryptedData = CryptoJS.AES.encrypt(wordArray, "aaa");
    let encryptedDataStr = encryptedData.toString();
    return encryptedDataStr;
  };
};

/**
 * Декодирует файл
 * @param {*} encryptedDataStr
 * @param {*} decryptToken
 * @returns blob
 */
export const decryptFile = (encryptedDataStr, decryptToken) => {
  let decryptData = CryptoJS.AES.decrypt(encryptedDataStr, decryptToken);
  let uInt8Array = convertWordArrayToUint8Array(decryptData);
  let blob = new Blob([uInt8Array]);
  return blob;
};
