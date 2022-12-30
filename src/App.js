import { useEffect, useState } from "react";
import "./App.scss";
import Upload from "./components/Upload/Upload";
import Play from "./components/Play/Play";
import Separator from "./components/Separator/Separator";
import { Context } from "./Context";
import Decrypt from "./components/Decrypt/Decrypt";
import CryptoJS from "crypto-js";

const App = () => {
  const [UploadedVideo, setUploadedVideo] = useState(null);
  const [AllUpload, setAllUpload] = useState(false);
  const [GlobalData, setGlobalData] = useState({
    VideoTokens: [
      "bafkreid73m36otrtzszutnfgkhsanna3iv2nelrx3dj36cktvoxhtm3ktm",
      "fdgni4ui4yhiuyh4uifgy4iufbi4uyf",
    ],
    DecryptToken: "aaa",
  });

  useEffect(() => {
    let myStr = "NICEPLACETOLIVEIN";
    let encryptedData = CryptoJS.AES.encrypt(myStr, GlobalData.DecryptToken);
    console.log("!!!", encryptedData.toString());
    return () => {};
  }, [GlobalData.DecryptToken]);

  return (
    <Context.Provider value={{ GlobalData, setGlobalData }}>
      <div className="App">
        <div className="left">
          <Upload
            setUploadedVideo={setUploadedVideo}
            UploadedVideo={UploadedVideo}
            setAllUpload={setAllUpload}
          />
          <Decrypt />
        </div>
        <Separator />
        <div className="right">
          <Play UploadedVideo={UploadedVideo} AllUpload={AllUpload} />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
