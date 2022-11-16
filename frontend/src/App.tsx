import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashboardStaff } from "./components/Dashboard/DashboardStaff";
import { DashBoardUser } from "./components/Dashboard/DashBoardUser";

import Redirect from "./components/Login/Redirect";
import { Signup } from "./components/SignUp/SignUpForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/user-home"} element={<DashBoardUser />} />
        <Route path={"/staff-home"} element={<DashboardStaff />} />
        <Route path={"/admin-home"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />}/>      
        <Route path={"/redirect"} element={<Redirect />}/>  
        <Route path={"/signup"} element={<Signup />}/>  
        <Route path={"/login"} element={<Login />}/> 
        <Route path={"/redirect"} element={<Redirect />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
