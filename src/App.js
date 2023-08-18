//import Home from "./pages/home/Home"
//import TopBar from "./components/topbar/TopBar"
//import Login from "./pages/login/Login";
//import Register from "./pages/register/Register";
//import Settings from "./pages/settings/Settings";
//import Single from "./pages/single/Single";
//import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Register from "./pages/register/Register";
import Home from "./pages/home/Home";

function App() {

  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route exact element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/post" element={<Home/>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
