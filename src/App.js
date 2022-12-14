import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import DocumentationA from "./Components/Pages/DocumentationA/DocumentationA";
import VideoTutorial from "./Components/Pages/VideoTutorial/VideoTutorial";
import SMCApis from "./Components/Pages/SetupEnvironment/SetupEnvironment";
import LearnByCoding from "./Components/Pages/LearnByCoding/LearnByCoding";
import OurApi from "./Components/Pages/OurApi/OurApi";
import TutorialPage from "./Components/Pages/Tutorials/TutorialPage";
import GetInvolved from "./Components/Pages/GetInvolved/GetInvolved ";
import Community from "./Components/Pages/Community/Community";
import Login from "./Components/Pages/Login/Login";
import Registration from "./Components/Pages/Registration/Registration";
import ResetPassword from "./Components/Pages/ResetPassword/ResetPassword";

// npx json-server -p 3500 -w data/db.json

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/documentation' element={<DocumentationA/>}/>
        <Route path='/tutorial' element={<TutorialPage/>} />
        <Route path='/video-tutorial' element={<VideoTutorial/>} />
        <Route path='/smc-apis' element={<SMCApis/>} />
        <Route path='/tutorials' element={<TutorialPage/>} />
        <Route path='/learn-by-code' element={<LearnByCoding/>} />
        <Route path="/our-api" element={<OurApi/>}/>
        <Route path="/get-involved" element={<GetInvolved/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/forget-password" element={<ResetPassword/>}/>
      </Route>
    </Routes>
  );
}

export default App;
