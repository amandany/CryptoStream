import { useState } from "react";
import "./App.css";
import Upload from "./components/Upload/Upload";
import Play from "./components/Play/Play";
import Separator from "./components/Separator/Separator";

const App = () => {
  const [UploadedVideo, setUploadedVideo] = useState(null);
  const [AllUpload, setAllUpload] = useState(false);

  return (
    <div className="App">
      <Upload
        setUploadedVideo={setUploadedVideo}
        UploadedVideo={UploadedVideo}
        setAllUpload={setAllUpload}
      />
      <Separator />
      <Play UploadedVideo={UploadedVideo} AllUpload={AllUpload} />
    </div>
  );
};

export default App;
