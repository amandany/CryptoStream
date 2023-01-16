import { useEffect, useState } from "react";
import "./App.scss";
import Upload from "./components/Upload/Upload";
import Play from "./components/Play/Play";
import Separator from "./components/Separator/Separator";
import { Context } from "./Context";
import Decrypt from "./components/Decrypt/Decrypt";
import CryptoJS from "crypto-js";
import ConnectWallet from "./components/Keprl/ConnectWallet";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";

const App = () => {
  const [UploadedVideo, setUploadedVideo] = useState(null);
  console.log();
  const [AllUpload, setAllUpload] = useState(false);
  const [ActiveVideoDecrypt, setActiveVideoDecrypt] = useState(null);
  const [GlobalData, setGlobalData] = useState({
    VideoTokens: [
      "bafkreid73m36otrtzszutnfgkhsanna3iv2nelrx3dj36cktvoxhtm3ktm",
      "bafkreibpygae2wsfkckk5e6d73tsobx3wjrthndniacjxmzsabli4smp2e",
    ],
    DecryptToken: "aaa",
  });

  useEffect(() => {
    ConnectWallet();

    return () => {};
  }, []);

  return (
    <Context.Provider value={{ GlobalData, setGlobalData }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="security" element={<div />} />
          <Route path="contacts" element={<div />} />
        </Route>
      </Routes>
      {/* <div className="App">
        <div className="left">
          <Upload
            setUploadedVideo={setUploadedVideo}
            UploadedVideo={UploadedVideo}
            setAllUpload={setAllUpload}
          />
          <Decrypt
            setActiveVideoDecrypt={setActiveVideoDecrypt}
            UploadedVideo={UploadedVideo}
          />
        </div>
        <Separator />
        <div className="right">
          <Play
            UploadedVideo={UploadedVideo}
            AllUpload={AllUpload}
            ActiveVideoDecrypt={ActiveVideoDecrypt}
          />
        </div>
      </div> */}
    </Context.Provider>
  );
};

export default App;
