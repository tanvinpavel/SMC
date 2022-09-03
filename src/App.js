import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import ComingSoon from "./Components/Pages/ComingSoon/ComingSoon";
import DocumentationA from "./Components/Pages/DocumentationA/DocumentationA";
import VideoTutorial from "./Components/Pages/VideoTutorial/VideoTutorial";
import SMCApis from "./Components/Pages/SMCapis/SMCApis";


// npx json-server -p 3500 -w data/db.json

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/documentation' element={<DocumentationA/>}/>
        <Route path='/tutorial' element={<h1>This is tutorial</h1>} />
        <Route path='/video-tutorial' element={<VideoTutorial/>} />
        <Route path='/smc-apis' element={<SMCApis/>} />
        <Route path='/comingSoon' element={<ComingSoon/>} /> */}
        <Route path="/outapi" element={<OurApi/>}/>
      </Route>
    </Routes>
  );
}

export default App;
