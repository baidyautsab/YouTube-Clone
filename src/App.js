import AdminLongin from "./Components/AdminLogin";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import AdminSignUp from "./Components/AdminSignUp";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminlogin" element={<AdminLongin/>} />
          <Route path="/userlogin" element={<UserLogin/>} />
          <Route path="/adminsignup" element={<AdminSignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
