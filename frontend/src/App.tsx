import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/home"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />}/>
        {/* <Route path="*" element={ <Navigate to="/home" />}/> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
